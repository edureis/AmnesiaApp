import { BrowserModule }            from '@angular/platform-browser';
import { ErrorHandler,
         NgModule }                 from '@angular/core';
import { IonicApp,
         IonicErrorHandler,
         IonicModule }              from 'ionic-angular';
import { StatusBar }                from '@ionic-native/status-bar';
import { SplashScreen }             from '@ionic-native/splash-screen';
import { Http, HttpModule }         from '@angular/http';

// Components and Pages
import { App }                      from './app.component';

// Services
import { AppService }               from '../services/app.service';
import { LoginService }             from '../services/login.service';


@NgModule({
    declarations: [
        App
    ],
    imports: [
        HttpModule,
        BrowserModule,
        IonicModule.forRoot(App),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        App
    ],
    providers: [
        AppService,
        LoginService,
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler, useClass: IonicErrorHandler
        }
    ]
})
export class AppModule {}
