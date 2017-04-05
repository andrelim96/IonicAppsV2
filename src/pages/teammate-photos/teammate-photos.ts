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
	
	//canvas = document.getElementById("canvas");
    ctx:CanvasRenderingContext2D;
    img1:any;
    img2:any;
    imagesLoaded:number;
	cameraData:string;
	photoTaken:boolean;
	cameraUrl:string;
	photoSelected:boolean;

	public base64Image:string;


  constructor(public navCtrl: NavController) {
  	this.base64Image="";
  	//this.photoTaken=false;
  }

  ionViewDidLoad() {
    console.log('Hello TeammatePhotos Page');
  }

  takePicture(frame:string){
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
  		this.img1=imageData;
  		this.img2=frame;
  		this.imagesLoaded += 1;

  		//var src = "data:image/jpeg;base64,";
		//this.img1 += item_image;
		//newImage = document.createElement('img1');
		//newImage.src = src;

	    
        this.ctx.drawImage(this.img1, 0, 0);
        //gabs tipe data string
        this.ctx.globalAlpha = 0.5;
        this.ctx.drawImage(this.img2, 0, 0);
	    
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



 accessGallery(){
   Camera.getPicture({
     sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }

logoClick(nama:string){
	//var nama = getDocumentById('frame1')
	this.base64Image=nama;

}

selectFromGallery() {
    var options = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI
    };
    Camera.getPicture(options).then((imageData) => {
      this.cameraUrl = imageData;
      this.photoSelected = true;
      this.photoTaken = false;
    }, (err) => {
      // Handle error
    });
  }
 
  openCamera() {
    var options = {
      sourceType: Camera.PictureSourceType.CAMERA,
      destinationType: Camera.DestinationType.DATA_URL
    };
    Camera.getPicture(options).then((imageData) => {
      this.cameraData = 'data:image/jpeg;base64,' + imageData;
      this.photoTaken = true;
      this.photoSelected = false;
    }, (err) => {
      // Handle error
    });
  }

}
