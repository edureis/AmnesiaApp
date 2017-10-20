import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  	constructor() {}

    apiUrl(): string {
        return 'https://amnesia.servehttp.com/api';
    }

};
