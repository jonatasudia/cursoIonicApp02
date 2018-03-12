import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log(this.navParams);  
    console.log(this.navParams.get('type'));
    this.navParams.data.type;
    this.navParams.data.curse;
    
    this.navParams.data['year'];
    console.log(this.navParams.get('message')());
    console.log(this.navParams.data.year);
  }

  pushPage(): void{
    this.navCtrl.push(ContactPage);
  }

  popPage(): void{
    this.navCtrl.pop();
  }

}
