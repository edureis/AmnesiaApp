import { App, ToastController } 			from 'ionic-angular';
import { Injectable } 						from '@angular/core';
import { Http, Headers, RequestOptions,
		 Response, ResponseContentType }	from '@angular/http';
import { Observable } 						from 'rxjs/Observable';
import { PlatformService }	 				from '../services/platform.service';

@Injectable()
export class RequestService {

	constructor(
		private app: App,
		private http: Http,
		private toastCtrl: ToastController,
		private _platform: PlatformService,
	) { }

	get(url: string, params?: string): Observable<Object> {
		let opt: RequestOptions;
		let myHeaders: Headers = new Headers;
		let token: string = localStorage.getItem('token') ? localStorage.getItem('token') : '';
		myHeaders.set('Content-Type', 'application/json');
		myHeaders.set('Authorization', token);
		myHeaders.set('Access-Control-Allow-Origin', '*');
		if (params == undefined) {
			params = '';
		};
		return new Observable<Object>(observer => {
			this.http.get(url + "?" + params, { headers: myHeaders }).subscribe(
				data => observer.next(data.json()),
				error => {
                    this.showToast(error);
                    observer.error(error);
                    observer.complete();
				}
			);
		});
	}

	post(url: string, params: string): Observable<Object> {
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});
		headers.append('Authorization', 'Bearer ' + localStorage.getItem('token') ? localStorage.getItem('token') : '');
		let options = new RequestOptions({ headers: headers });
		return new Observable<Object>(observer => {
			this.http.post(url, params, options).subscribe(
				data => observer.next(data.json()),
				error => {
                    this.showToast(error);
                    observer.error(error);
                    observer.complete();
				}
			);
		});
	}

	delete(url: string, params?: string): Observable<Object> {
		let headers = new Headers({
			'Content-Type': 'application/json',
			'X-HTTP-Method-Override': 'DELETE',
			'Access-Control-Allow-Origin': '*'
		});

		headers.append('Authorization', 'Bearer ' + localStorage.getItem('token') ? localStorage.getItem('token') : '');
		let options: any = new RequestOptions({ headers: headers });
		return new Observable<Object>(observer => {
			this.http.delete(url, options).subscribe(
				data => observer.next(data.json()),
				error => {
                    this.showToast(error);
                    observer.error(error);
                    observer.complete();
				}
			);
		});
	}
	
	private showToast(msg: string) {
		this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'top'
        }).present();
	}
}
