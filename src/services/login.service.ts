import { Injectable }       from '@angular/core';
import { Http, Headers,
         RequestOptions }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { AppService }       from './app.service';

@Injectable()
export class LoginService {

    constructor(
        private _http: Http,
        private _app: AppService,
    ) { }

    doLogin(email: string, password: string, device?: string): Observable<boolean> {
        return new Observable<boolean>(observer => {
            let headers = new Headers({
                'Content-Type': 'application/json',
                'Auth-Key': 'amnesia',
                'Client-Service': 'frontend-client'
            });
            let options = new RequestOptions({ headers: headers });
            let params: JSON = JSON.parse('{}');
            params["email"] = email;
            params["password"] = password;
            console.log(params["email"]);
            console.log(params["password"]);
            this._http.post(this._app.apiUrl() + '/auth/login', JSON.stringify(params), options)
                .subscribe(
                    data => {
                        console.log(data);
                        // if (data["success"]) {
                        //     localStorage.setItem('token', data["success"]["token"]);
                        //     observer.next(true);
                        // }
                        // else
                        //     observer.error(false);
                        // observer.complete();
                    }, error => {
                        observer.error(false);
                        observer.complete();
                    }
                );
        });
    }

}
