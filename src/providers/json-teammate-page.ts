import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonTeammatePage{
data : any;

  constructor(public http: Http) {

  }

  load() {
        if (this.data) {

            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {

            this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json').subscribe(res => {

                this.data = res.json();
                resolve(this.data);
                console.log(this.data);
            });
        });
    }

}
