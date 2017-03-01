import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

/*
  Generated class for the TeammatePhotos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teammate-photos',
  templateUrl: 'teammate-photos.html'
})
export class TeammatePhotosPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TeammatePhotos Page');
  }

}
