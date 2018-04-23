import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {

  }



  inicio(){
    this.navCtrl.push(InicioPage);
    let loader = this.loadingCtrl.create({
      content: "Cargando...",
      duration: 2000
    });
    loader.present();
  }
  }

