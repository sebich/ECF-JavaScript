import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VilleProvider } from '../providers/ville/ville';
import { HttpClientModule } from '@angular/common/http';
import { DetailPage } from '../pages/detail/detail';
import { FormvillePage } from '../pages/formville/formville';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    FormvillePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    FormvillePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VilleProvider
  ]
})
export class AppModule {}
