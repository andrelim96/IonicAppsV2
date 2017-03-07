import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Camera } from 'ionic-native';
import { JsonTeammatePage } from '../../providers/json-teammate-page';

/*
  Generated class for the TeammatePhotos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teammate-photos',
  templateUrl: 'teammate-photos.html',
  providers: [JsonTeammatePage]
})
export class TeammatePhotosPage {
  public base64Image: String;
  photos: any;

  constructor(public navCtrl: NavController, public data: JsonTeammatePage) {
    this.data.load().then(result => {
      this.photos = result;
    });
  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
}
