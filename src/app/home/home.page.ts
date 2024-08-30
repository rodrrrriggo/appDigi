import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'DIGIGAMES DICE:',
      subHeader: 'Lee con atención:',
      message: 'Al unirte a nosotros te damos el respaldo, la seguridad y el compromiso de tu cuenta. Esperamos verte seguido!',
      buttons: ['Comienza tu aventura'],
    });

    await alert.present();
  }
}
  

