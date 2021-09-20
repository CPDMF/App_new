import { Inject, Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable({providedIn:'root'})
export class AccessProvider{
    //server: 'http://localhost/ionic-api/';

    constructor(
        public http: HttpClient
    ){}

    postData(body,file){
        const headers=new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json; charset-UTF-8'
        });

        const options={
            // eslint-disable-next-line object-shorthand
            headers: headers
        };
        console.log('right');
        return this.http.post( 'https://192.168.1.2/ionic-api/' + file,JSON.stringify(body),options).timeout(5000).map(res=>res);
    }
}
