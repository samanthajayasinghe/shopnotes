import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  item:any = {};

  constructor(public navCtrl: NavController) {
    this.initItem();
  }

  saveNote() {
    console.log(this.item);
  }

  initItem() {
    this.item = {
      name : '',
      quantity : 1,
      date : '',
      note : ''
    }
  }
}
