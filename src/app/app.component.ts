import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar} from 'ionic-native';

import { NewsPage } from '../pages/news/news';
import { FixtureResultPage } from '../pages/fixture-result/fixture-result';
import { TeammatePhotosPage } from '../pages/teammate-photos/teammate-photos';
import { Rugby101Page } from '../pages/rugby101/rugby101';
import { RugbyClubsPage } from '../pages/rugby-clubs/rugby-clubs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make UsersPage the root (or first) page
  rootPage: any = NewsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'News', component: NewsPage },
      { title: 'FixtureResults', component: FixtureResultPage },
      { title: 'TeammatePhotos', component: TeammatePhotosPage },
      { title: 'Rugby101', component: Rugby101Page },
      { title: 'RugbyClubs', component: RugbyClubsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
