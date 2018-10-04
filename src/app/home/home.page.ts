import { Component } from '@angular/core';
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController, private navCtrl: NavController){

  }

  ngOnInit() {
    
  }
}
