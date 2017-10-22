import { Component, ViewChild }     from '@angular/core';
import { Nav, Platform,
         MenuController, 
         ToastController}           from 'ionic-angular';
import { StatusBar }                from '@ionic-native/status-bar';
import { SplashScreen }             from '@ionic-native/splash-screen';

// Components
import { LoginComponent }           from '../pages/login/login';
import { BoardListComponent }       from '../pages/boards/board-list';

// Services
import { LoginService }             from "../services/login.service";

@Component({
    templateUrl: 'app.html'
})

export class App {
    @ViewChild(Nav) nav: Nav;
    pages: Array<{title: string, component: any}>;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        private menu: MenuController,
        private toastCtrl: ToastController,
        private _login: LoginService
    ) {
        this.pages = [
            { title: 'Quadros', component: 'boards' }
        ];
    }

    ngOnInit() {
        this.initializeApp();
		if (localStorage.getItem('token'))
            this.nav.setRoot('boards')
        else
            this.nav.setRoot('login');
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }

    doLogout() {
        this._login.doLogout().subscribe(response => {
            if (this.menu.isOpen())
                this.menu.close();
            this.nav.setRoot('login');
        }, error => {
            this.toastCtrl.create({
                message: "Erro ao fazer Logout!",
                duration: 4030,
                position: 'bottom'
            }).present();
        });
    }
}
