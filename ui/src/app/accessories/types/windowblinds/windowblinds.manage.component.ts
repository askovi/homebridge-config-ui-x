import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceType } from '@oznu/hap-client';

import { interval } from 'rxjs/observable/interval';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-windowblinds-manage',
  templateUrl: './windowblinds.manage.component.html',
  styleUrls: ['./windowblinds.component.scss']
})
export class WindowblindsManageComponent implements OnInit {
  @Input() public service: ServiceType;
  public targetPosition: any;
  public targetPositionChanged: Subject<string> = new Subject<string>();
  constructor(
    public activeModal: NgbActiveModal,
    ) { 
      this.targetPositionChanged
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe((value) => {
        this.service.getCharacteristic('TargetPosition').setValue(this.targetPosition.value);
      });
  }

  ngOnInit() {
    this.loadTargetPosition();
  }

  loadTargetPosition() {
    const TargetPosition = this.service.getCharacteristic('TargetPosition');

    this.targetPosition = {
      value: TargetPosition.value,
      min: TargetPosition.minValue,
      max: TargetPosition.maxValue,
      step: TargetPosition.minStep,
    };
  }

  onTemperatureStateChange() {
    this.targetPositionChanged.next(this.targetPosition.value);
  }


}
