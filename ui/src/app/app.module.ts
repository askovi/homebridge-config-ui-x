import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { AceEditorModule } from 'ng2-ace-editor';
import { ToastrModule } from 'ngx-toastr';
import { NgxMdModule } from 'ngx-md';

import {
  JsonSchemaFormModule,
  Bootstrap4FrameworkModule,
  Bootstrap4Framework,
  Framework,
  WidgetLibraryService,
  FrameworkLibraryService,
  JsonSchemaFormService
} from 'ngx-json-schema';

import { routerConfigFn } from './_helpers/router.config';
import { HttpLoaderFactory } from './_helpers/translate.loader';

import { WsService } from './_services/ws.service';
import { ApiService } from './_services/api.service';
import { PluginService } from './_services/plugin.service';
import { AuthService } from './_services/auth.service';
import { AuthHttpInterceptor } from './_services/http.service';
import { MobileDetectService } from './_services/mobile-detect.service';

import { SpinnerModule } from './spinner/spinner.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { PlatformToolsModule } from './platform-tools/platform-tools.module';
import { CustomPipesModule } from './_pipes/custom-pipes.module';

import { AppComponent } from './app.component';
import { StatusComponent, StatusStates } from './status/status.component';
import { PluginsComponent, PluginStates } from './plugins/plugins.component';
import { PluginSearchComponent, PluginSearchStates } from './plugins/plugins.search.component';
import { PluginsManageComponent } from './plugins/plugins.manage.component';
import { PluginSettingsComponent } from './plugins/plugins.settings.component';
import { PluginsMarkdownDirective } from './plugins/plugins.markdown.directive';
import { ConfigComponent, ConfigStates } from './config/config.component';
import { ConfigRestoreBackupComponent } from './config/config.restore-backup.component';
import { LogsComponent, LogsStates } from './logs/logs.component';
import { UsersComponent, UsersStates } from './users/users.component';
import { UsersAddComponent } from './users/users.add.component';
import { UsersEditComponent } from './users/users.edit.component';
import { RestartComponent, RestartState } from './restart/restart.component';
import { LoginComponent, LoginStates } from './login/login.component';
import { ResetComponent, ResetModalComponent } from './reset/reset.component';
import { DashboardComponent, DashboardStates } from "./dashboard/dashboard.component";
import { Plugins_approvedComponent, Plugin_approvedStates } from './plugins_approved/plugins_approved.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    PluginsComponent,
    ConfigComponent,
    ConfigRestoreBackupComponent,
    LogsComponent,
    UsersComponent,
    PluginSearchComponent,
    PluginsManageComponent,
    PluginSettingsComponent,
    PluginsMarkdownDirective,
    UsersAddComponent,
    UsersEditComponent,
    RestartComponent,
    LoginComponent,
    ResetComponent,
    ResetModalComponent,

    DashboardComponent,

    Plugins_approvedComponent,
    
  ],
  entryComponents: [
    PluginsManageComponent,
    PluginSettingsComponent,
    UsersAddComponent,
    UsersEditComponent,
    ResetModalComponent,
    ConfigRestoreBackupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    ReactiveFormsModule,
    AceEditorModule,
    SpinnerModule,
    Bootstrap4FrameworkModule,
    {
      ngModule: JsonSchemaFormModule,
      providers: [
        JsonSchemaFormService,
        FrameworkLibraryService,
        WidgetLibraryService,
        { provide: Framework, useClass: Bootstrap4Framework, multi: true }
      ]
    },
    NgxMdModule.forRoot(),
    ToastrModule.forRoot({
      autoDismiss: true,
      newestOnTop: false,
      closeButton: true,
      maxOpened: 2,
      positionClass: 'toast-bottom-right'
    }),
    NgbModule.forRoot(),
    UIRouterModule.forRoot({
      states: [
        StatusStates,
        ConfigStates,
        LogsStates,
        UsersStates,
        PluginStates,
        PluginSearchStates,
        RestartState,
        LoginStates,
        DashboardStates,
        Plugin_approvedStates,
      ],
      useHash: false,
      config: routerConfigFn,
      otherwise: '/'
    }),
    AccessoriesModule,
    PlatformToolsModule,
    CustomPipesModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    AuthService,
    WsService,
    ApiService,
    PluginService,
    MobileDetectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
