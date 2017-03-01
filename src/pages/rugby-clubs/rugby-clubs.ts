import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

/*
  Generated class for the RugbyClubs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rugby-clubs',
  templateUrl: 'rugby-clubs.html'
})
export class RugbyClubsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RugbyClubs Page');
  }

}
