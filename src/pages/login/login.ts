import { Component }            from '@angular/core';
import { MenuController,
         NavController, 
		 ToastController,
		 IonicPage,
		 LoadingController }	from 'ionic-angular';

// Services
import { LoginService }         from '../../services/login.service';
import { Http } from '@angular/http';

@IonicPage({
    name: "login",
    segment: "login"
})

@Component({
    selector: 'login',
    templateUrl: './login.html'
})

export class LoginComponent {

	email: string;
	password: string;
	ShowLoadingLogin: boolean;
	RECaptchaCode: string;

    constructor(
        private navCtrl: NavController,
        private toastCtrl: ToastController,
		private menu: MenuController,
		private loadingCtrl: LoadingController,
		private _login: LoginService,
		private http: Http,
	) { }

	ionViewDidLoad() {
		this.menu.swipeEnable(false);
	}

	private  getRecaptcha (Code: string):void{
		this.RECaptchaCode  =  Code;

  	}
	 
 
	doLogin() {
		this.ShowLoadingLogin = true;
		this._login.doLogin(this.email, this.password, this.RECaptchaCode).subscribe(
			result => {
				this.menu.swipeEnable(true);
				this.navCtrl.setRoot('boards');
			}, error => {
				this.toastCtrl.create({
					message: "Login falhou, dados inválidos!",
					duration: 4030,
					position: 'bottom'
				}).present();
				this.ShowLoadingLogin = false;
			}
		);	
	}

}