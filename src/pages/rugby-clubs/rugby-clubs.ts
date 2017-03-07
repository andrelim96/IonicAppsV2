import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { JsonClubs } from '../../providers/json-clubs'

/*
  Generated class for the RugbyClubs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rugby-clubs',
  templateUrl: 'rugby-clubs.html',
  providers: [JsonClubs]
})
export class RugbyClubsPage {
  club: any;
  constructor(public navCtrl: NavController, public data: JsonClubs) {
    this.data.load().then(result =>{
      this.club = result;
    });
  }

}
