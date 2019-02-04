import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VilleProvider } from '../../providers/ville/ville';
import { DetailPage } from '../detail/detail';
import { FormvillePage } from '../formville/formville';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private villeList: any = [];

  constructor(public navCtrl: NavController, public villeProvider: VilleProvider) {

    villeProvider.loadVilles().then(
      (data) => {
        this.villeList = data;
      }
    )
  }

goToDetail() {
  this.navCtrl.push(DetailPage);
}

goToNewCity() {
  this.navCtrl.push(FormvillePage);
}

}


