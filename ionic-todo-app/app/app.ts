import { Component } from '@angular/core';
import { App, ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { LoginPage } from  './pages/login/login';


import {
  FIREBASE_PROVIDERS,
  defaultFirebase,
  AngularFire,
  AuthMethods,
  AuthProviders,
  firebaseAuthConfig} from 'angularfire2';

@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    providers: [
        FIREBASE_PROVIDERS,
        // Initialize Firebase app  
        defaultFirebase({
            apiKey: "AIzaSyATTixTN3j-oVvAiL1WZHcnHTHdDFinELo ",
            authDomain: " todoreactnative-a6eb2.firebaseio.com",
            databaseURL: "todoreactnative-a6eb2.firebaseio.com",
            storageBucket: "todoreactnative-a6eb2.appspot.com",
        }),
        firebaseAuthConfig({
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
            scope: ['email']
        })
    ]
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
