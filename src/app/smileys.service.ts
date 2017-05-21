import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Smileys } from './smileys'

@Injectable()
export class SmileysService{

    private smileysUrl = 'http://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?query=kristiansand'

    constructor(private http: Http){}

    getSmileys(): Observable<Smileys[]>{
        return this.http.get(this.smileysUrl)
            .map(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response){
        let body = res.json();
        return body["entries"] || { };
    }

    private handleError(error: Response | any){
        let errMsg: string;
        if (error instanceof Response){
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
