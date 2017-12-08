import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inputs:any = {};
  items = [];

  constructor(public navCtrl: NavController) {
    this.initItem();
  }

  saveNote() {
    console.log(this.items);
  }

  addItem() {
    this.items.push({name:this.inputs.name, quantity: this.inputs.quantity});
    this.inputs.name = '';
  }

  initItem() {
    this.inputs = {
      name : '',
      quantity : 1,
      date : '',
      note : ''
    }

    this.items = [];
  }
}
