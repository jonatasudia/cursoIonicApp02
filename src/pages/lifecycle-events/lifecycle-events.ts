import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewCanEnter():Promise<any> {
    /*
    console.log('01 ionViewCanEnter called');
    return true;
    */

    return new Promise((resolve, reject) => {
      console.log("Aguardando 2 segundos");

      setTimeout(()=> {
        let number = Math.round(Math.random() * 100);
        if(number % 2 == 0)
        {
          resolve();
          console.log(`${number} - Autorizado!`);
        }
        else
        {
          reject();
          console.log(`${number} - Não Autorizado!`);
        }
      },2000);
    });
  }

  ionViewDidLoad() {
    console.log('02 ionViewDidLoad called');
  }
 
  ionViewWillEnter() {
    console.log('03 ionViewWillEnter called');
  }

  ionViewDidEnter() {
    console.log('04 ionViewDidEnter called');
  }

  ionViewCanLeave(): Promise<any> {
   /* console.log('05 ionViewCanLeave called');
    return false;
*/

    return new Promise((resolve, reject) => {
      console.log("Aguardando 2 segundos");

      setTimeout(()=> {
        let number = Math.round(Math.random() * 100);
        if(number % 2 == 0)
        {
          resolve();
          console.log(`${number} - Autorizado!`);
        }
        else
        {
          reject();
          console.log(`${number} - Não Autorizado!`);
        }
      },2000);
    });
  }

  ionViewWillLeave() {
    console.log('06 ionViewWillLeave called');
  }

  ionViewDidLeave() {
    console.log('07 ionViewDidLeave called');
  }

  ionViewWillUnload() {
    console.log('08 ionViewWillUnload called');
  }

  onPop(): void{
    this.navCtrl.pop()
    .then((authorizedAccess) => {
      if(authorizedAccess){
        console.log("Page popped!");
      }
      else{
        console.log("Saída não autorizada");
      }
    }).catch(error =>{
      console.log('Mensagem se houver erro.', error);
    });
  }
  

}
