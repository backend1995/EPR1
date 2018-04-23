import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ToastController} from 'ionic-angular';
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  epr1:number;
  epe1:number;
  epr2:number;
  epe2:number;
  eva1:number;
  eva2:number;
  eva3:number;
  eva4:number;      
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

 public Promedio(){
  let epr1 = this.epr1;
  let epe1 = this.epe1;
  let epr2 = this.epr2;
  let epe2 = this.epe2;
  
  let eva1 = this.eva1;
  let eva2 = this.eva2;
  let eva3 = this.eva3;
  let eva4 = this.eva4;
  let promedioEPR = ((((epr1*10)/100))+((epe1*15)/100)+((epr2*20)/100)+((epe2*25)/100));
  let promedioEVA = (((eva1*30)/100)+((eva2*30)/100)+((eva3*30)/100)+((eva4*30)/100))/4;
  let Presentacion = (promedioEPR+promedioEVA);
  if(Presentacion >5.5){
    let toast = this.toastCtrl.create({
      message:'Tu promedio EPR '+promedioEPR + 'Tu Promedio En Las Eva´s '+promedioEVA+' Tu Nota De Presentacion es '+
      ' ' +Presentacion,
      duration:7000,
      position:'middle', //top/middle/bottom
      showCloseButton: true
    });
    toast.present();
  }else
  {
    let toast = this.toastCtrl.create({
      message:'Tu promedio '+'  '+Presentacion +' '+ 'Es Menor A La Nota De Eximición o Aprobación De La Asignatura Debes Rendir Examen Y Necesitas Nota :'+''+
      (5.8-(Presentacion*0.3)),
      position:'middle', //top/middle/bottom
      showCloseButton: true
    });
    toast.present();
  }
  


 }

 
 }
