import { Component }            from '@angular/core';
import { MenuController,
         NavController, 
         ToastController}       from 'ionic-angular';

import { LoginService }         from '../../services/login.service';

@Component({
    selector: 'login',
    templateUrl: './login.html'
})

export class LoginComponent {

	email: string;
	password: string;
	ShowLoadingLogin: boolean;
    
    constructor(
        private navCtrl: NavController,
        private toastController: ToastController,
        private login: LoginService,
        private menu: MenuController
    ) { }

	doLogin() {
        this.ShowLoadingLogin = true;
		this.login.doLogin(this.email, this.password).subscribe(
			result => {
				this.menu.swipeEnable(true);
				this.navCtrl.setRoot('home');
			}, error => {
				this.toastController.create({
					message: "Login falhou, dados inválidos!",
					duration: 4030,
					position: 'bottom'
				}).present();
				this.ShowLoadingLogin = false;
			}
		);
	}

}