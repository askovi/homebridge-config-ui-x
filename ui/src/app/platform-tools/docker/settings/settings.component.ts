import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, ReactiveFormsModule, Form } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { StateService } from '@uirouter/angular';
import { ApiService } from '../../../_services/api.service';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() env;
  public form: FormGroup;
  public networkForm: FormGroup;
  public wiredForm: FormGroup;
  public wirelessForm: FormGroup;
  public savedSettings = false;
  public networks: any[];
  public enterprise: boolean = false;
  public wifienabled: boolean = false;
  
  constructor(
    public $auth: AuthService,
    private $api: ApiService,
    public $fb: FormBuilder,
    public toastr: ToastrService,
    private translate: TranslateService,
  ) {

   
   }

  ngOnInit() {
    
    this.networkForm = this.$fb.group({
      ssid: new FormControl(null),
      username: new FormControl(""),
      password: new FormControl("")
    });

    this.form = this.$fb.group({
      HOMEBRIDGE_DEBUG: [false],
      HOMEBRIDGE_INSECURE: [false],
    });

    this.wiredForm = this.$fb.group({
      WIRED_MODE: [false]
    });

    this.wirelessForm = this.$fb.group({
      WIRELESS_MODE: [false]
    });
    this.wirelessForm.valueChanges.subscribe(() => {
      this.wifienabled = !this.wifienabled;

      if (this.wifienabled){
        this.$api.getWifiNetworks().subscribe(
          (data: any) => {
             this.networks = data;
          },
          (err) => {
            this.toastr.error(
              `${this.translate.instant('plugins.toast_failed_to_load_networks')}: ${err.message}`,
              this.translate.instant('toast.title_error')
            );
          }
        );
      }
    });

    this.form.patchValue(this.env);
    this.form.valueChanges.subscribe(this.saveSettings.bind(this));
  }

  onSubmit() {
    this.$api.connectNetwork(this.networkForm.value.ssid, this.networkForm.value.username, this.networkForm.value.password).subscribe(() => {
      this.toastr.success(
        this.translate.instant('platform.docker.settings.toast_title_settings_saved')
      );
    });
  }

  onChange(newValue){
    let chosenNetwork = this.networks.find(o => o.ssid === newValue);
    if (chosenNetwork.security === 'enterprise'){
      this.enterprise = true;
    }
  }

  saveSettings(data = this.form.value) {
    this.savedSettings = true;

    this.$api.dockerSaveEnv(data).subscribe(() => {
      this.toastr.success(
        this.translate.instant('platform.docker.settings.toast_container_restart_required'),
        this.translate.instant('platform.docker.settings.toast_title_settings_saved')
      );
    });
  }

}

export function settingsStateResolve($api, toastr, $state) {
  return $api.dockerGetEnv().toPromise().catch((err) => {
    if (err.status === 404) {
      toastr.error(
        'You need to update to the latest version of HOOBS to use this feature. Please contact support.',
        'Image Update Required',
        {
          toastLife: 30000
        }
      );
    } else {
      toastr.error(err.message, 'Failed To Load Settings');
    }
    $state.go('status');
  });
}

export const SettingsState = {
  name: 'docker.settings',
  url: '/settings',
  views: {
    '!$default': { component: SettingsComponent }
  },
  resolve: [{
    token: 'env',
    deps: [ApiService, ToastrService, StateService],
    resolveFn: settingsStateResolve
  }],
  data: {
    requiresAuth: true,
    requiresAdmin: true
  }
};
