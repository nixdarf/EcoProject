import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
import { EcoPage } from '../eco/eco';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {}

  onRegister(option){
      this.navCtrl.push(EcoPage);
  }
}
