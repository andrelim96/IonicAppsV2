import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NewsPage } from '../pages/news/news';
import { FixtureResultPage } from '../pages/fixture-result/fixture-result';
import { TeammatePhotosPage } from '../pages/teammate-photos/teammate-photos';
import { Rugby101Page } from '../pages/rugby101/rugby101';
import { RugbyClubsPage } from '../pages/rugby-clubs/rugby-clubs';

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    FixtureResultPage,
    TeammatePhotosPage,
    Rugby101Page,
    RugbyClubsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    FixtureResultPage,
    TeammatePhotosPage,
    Rugby101Page,
    RugbyClubsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
