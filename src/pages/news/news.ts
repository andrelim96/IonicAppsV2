import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

/*
  Generated class for the News page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello News Page');
  }

}
