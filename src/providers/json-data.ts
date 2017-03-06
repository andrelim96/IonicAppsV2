import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the JsonData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JsonData {
data : any;
  constructor(public http: Http) {
    
  }
  ionViewDidLoad() {
  console.log('Hello News Page');
}
  load() {
        if (this.data) {

            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {

            this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json').subscribe(res => {

                this.data = res.json();
                resolve(this.data);
                console.log(this.data);
            });
        });
    }
}
