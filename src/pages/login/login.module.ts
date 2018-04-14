import { NgModule }                 from '@angular/core';
import { IonicPageModule }          from 'ionic-angular';
import { LoginComponent }           from "./login";
import { ViewChild }                from '@angular/core';
import { ReCaptchaModule }          from 'angular2-recaptcha';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    IonicPageModule.forChild(LoginComponent),
    ReCaptchaModule,
  ],
  entryComponents: [ ],
  providers: [ ]
})

export class BoardListComponentModule {}
