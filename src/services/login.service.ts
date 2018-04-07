import { Injectable }       from '@angular/core';
import { Http, Headers,
         RequestOptions }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { AppService }       from './app.service';
import { ViewChild }        from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';

@Injectable()

export class LoginService {

    constructor(
        private _http: Http,
        private _app: AppService,
    ) { }

    doLogin(email: string, password: string, RECaptchaCode: string): Observable<boolean> {
        return new Observable<boolean>(observer => {
            let headers = new Headers({
                'Content-Type': 'application/json',
                'Auth-Key': 'amnesia',
                'Client-Service': 'frontend-client',
                'Access-Control-Allow-Origin': '*'
            });            
            let options = new RequestOptions({ headers: headers });
            let params: JSON = JSON.parse('{}');
            params["email"] = email;
            params["password"] = password;
            params["recaptcha"] = RECaptchaCode;
            this._http.post(this._app.apiUrl() + '/auth/login', JSON.stringify(params), options)
                .subscribe(
                    data => {
                        let response = data.json();
                        if (response['status'] == 200) {                            
                            localStorage.setItem('token', response['token']);
                            localStorage.setItem('user_id', response['id']);
                            localStorage.setItem('user_data', JSON.stringify(response['current-user']));
                            observer.next(true);
                        }
                        else
                            observer.error(false);
                        observer.complete();
                    }, error => {
                        observer.error(false);
                        observer.complete();
                    }
                );
        });
    }

    doLogout(): Observable<boolean> {
        return new Observable<boolean>(observer => {
            let headers = new Headers({
                'Content-Type': 'application/json',
                'Auth-Key': 'amnesia',
                'Client-Service': 'frontend-client',
                'Authorization': localStorage.getItem('token'),
                'User-ID': localStorage.getItem('user_id')
            });
            let options = new RequestOptions({ headers: headers });
            let params: JSON = JSON.parse('{}');
            this._http.post(this._app.apiUrl() + '/auth/logout', '', options)
                .subscribe(
                    data => {
                        let response = data.json();
                        if (response['status'] == 200 && response['message'] == 'Logout realizado.') {
                            localStorage.removeItem('token');
                            localStorage.removeItem('user_id');
                            localStorage.removeItem('user_data');
                            observer.next(true);
                        }
                        else
                            observer.error(false);
                        observer.complete();
                    }, error => {
                        observer.error(false);
                        observer.complete();
                    }
                );
        });
    }

}
