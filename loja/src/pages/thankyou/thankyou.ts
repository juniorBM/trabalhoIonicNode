import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThankyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {
  private token: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    // this.token = this.params.get('token');
    this.token = new Date().getMilliseconds();
    console.log('Getting token param:');
    console.log(this.token);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyouPage');
  }

}
