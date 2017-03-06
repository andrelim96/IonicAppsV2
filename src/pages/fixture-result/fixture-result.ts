import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {JsonDataFixtures} from '../../providers/json-data-fixtures';
/*
  Generated class for the FixtureResult page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fixture-result',
  templateUrl: 'fixture-result.html',
  providers:[JsonDataFixtures]
})

export class FixtureResultPage {
  companies :any;

  constructor(public navCtrl: NavController,public data:JsonDataFixtures) {
	this.data.load().then(result => {
   	this.companies = result;
    });

  }
  
  
}

