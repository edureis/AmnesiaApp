import { BrowserModule }        from '@angular/platform-browser';
import { ErrorHandler,
         NgModule }             from '@angular/core';
import { IonicApp,
         IonicErrorHandler,
         IonicModule }          from 'ionic-angular';

import { App }                  from './app.component';
import { HomePage }             from '../pages/home/home';
import { ListPage }             from '../pages/list/list';

import { StatusBar }            from '@ionic-native/status-bar';
import { SplashScreen }         from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        App,
        HomePage,
        ListPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(App),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        App,
        HomePage,
        ListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler, useClass: IonicErrorHandler
        }
    ]
})
export class AppModule {}
