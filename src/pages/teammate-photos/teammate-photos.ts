import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import {Camera} from 'ionic-native';

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

	
	public base64Image:string;

  constructor(public navCtrl: NavController) {
  	this.base64Image="https://placehold.it/150x150";

  }

  ionViewDidLoad() {
    console.log('Hello TeammatePhotos Page');
  }

  takePicture(){
  	Camera.getPicture({
  			quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum: false

  	}).then(imageData=>{
  		this.base64Image="data:image/jpeg;base64,"+imageData;
  	},error=>{
  		console.log("Error"+JSON.stringify(error));
  	});
  }

/*
  getPicture(option).then((imageData)=>{
  	let baseImage= 'data:image/jpeg;base64,'+imageData;

  },(err)=>{

  	//Handle error
  })
*/
}
