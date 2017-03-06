import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {JsonData} from '../../providers/json-data';
/*
  Generated class for the News page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  providers :[JsonData]
})
export class NewsPage {
  companies : any;
  constructor(public navCtrl: NavController , public data : JsonData) {
    this.data.load().then(result => {
    this.companies = result;
    });
}

}
