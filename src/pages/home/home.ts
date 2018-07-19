import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    
  }
  items = [
    'Unseenขอนแก่นสุดCool',
    'UnseenอุบลสุดCool',
    'UnseenกรุงเทพสุดCool',
  ];

  public itemSelected(item) {
    this.navCtrl.push(ContentDetailPage,{ name : item});
  }

  goPageAddContent(){
    this.navCtrl.push(AddContentPage);
  }

}
