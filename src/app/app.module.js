var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from "angularfire2/database";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { MovieDetailPage } from "../pages/movie-detail/movie-detail";
import { UserDetailPage } from "../pages/user-detail/user-detail";
import { UserHomePage } from "../pages/user-home/user-home";
import { SearchPage } from "../pages/search/search";
import { FalseUserService } from "../assets/services/falseUser.service";
import { firebaseConfig } from "./app.firebase.config";
import { RegisterPage } from "../pages/register/register";
import { AuthService } from '../providers/auth.service';
import { GooglePlus } from '@ionic-native/google-plus';
import { MovieService } from "../assets/services/movie.service";
import { UserService } from "../assets/services/user.service";
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            HomePage,
            ListPage,
            LoginPage,
            MovieDetailPage,
            SearchPage,
            UserDetailPage,
            UserHomePage,
            RegisterPage
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp),
            AngularFireModule.initializeApp(firebaseConfig),
            HttpModule,
            AngularFireAuthModule,
            AngularFireDatabaseModule
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HomePage,
            ListPage,
            LoginPage,
            MovieDetailPage,
            SearchPage,
            UserDetailPage,
            UserHomePage,
            RegisterPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            FalseUserService,
            UserService,
            AngularFireDatabase,
            AuthService,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            GooglePlus,
            MovieService
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map