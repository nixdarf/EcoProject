import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { RegisterPage } from '../pages/register/register';
import { RewardPage } from '../pages/reward/reward';
import { EcoPage } from '../pages/eco/eco';
import { MapPage } from '../pages/map/map';
import { EvaluationPage } from '../pages/evaluation/evaluation';
import { ScanPage } from '../pages/scan/scan';

@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    RewardPage,
    EcoPage,
    MapPage,
    EvaluationPage,
    ScanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    RewardPage,
    EcoPage,
    MapPage,
    EvaluationPage,
    ScanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
