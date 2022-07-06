import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IntentionallyCrash } from '@jonz94/capacitor-intentionally-crash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  async crash() {
    try {
      await IntentionallyCrash.crash();
    } catch (error: any) {
      const alert = await this.alertController.create({
        message: error,
        buttons: ['OK'],
      });
      alert.present();
    }
  }
}
