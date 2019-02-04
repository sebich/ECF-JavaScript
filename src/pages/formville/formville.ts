import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VilleProvider } from '../../providers/ville/ville';


@IonicPage()
@Component({
  selector: 'page-formville',
  templateUrl: 'formville.html',
})
export class FormvillePage {

  private ville;

  constructor(public navCtrl: NavController, public navParams: NavParams, public villeProvider: VilleProvider) {
    this.ville = villeProvider.getVille();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormvillePage');
  }

  validateForm(){
    
    this.villeProvider.saveVille().then(
      (data)=>{
        this.navCtrl.pop();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
