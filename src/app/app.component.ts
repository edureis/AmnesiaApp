import { Component, ViewChild }     from '@angular/core';
import { Nav, Platform }            from 'ionic-angular';
import { StatusBar }                from '@ionic-native/status-bar';
import { SplashScreen }             from '@ionic-native/splash-screen';

import { HomePage }                 from '../pages/home/home';
import { ListPage }                 from '../pages/list/list';
import { LoginComponent }           from '../pages/login/login';
import { BoardListComponent }       from '../pages/boards/board-list';

@Component({
    templateUrl: 'app.html'
})

export class App {
    @ViewChild(Nav) nav: Nav;
    pages: Array<{title: string, component: any}>;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen
    ) {
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'List', component: ListPage },
            { title: 'Quadros', component: 'boards' }
        ];
    }

    ngOnInit() {
        this.initializeApp();
		if (localStorage.getItem('token'))
            this.nav.setRoot(HomePage)
        else
            this.nav.setRoot(LoginComponent);
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
}
