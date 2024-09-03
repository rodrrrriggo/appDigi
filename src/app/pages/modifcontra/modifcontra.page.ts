import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modifcontra',
  templateUrl: './modifcontra.page.html',
  styleUrls: ['./modifcontra.page.scss'],
})
export class ModifcontraPage implements OnInit {

  correo: string = "";

  constructor(private alertController: AlertController, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'DIGIGAMES DICE:',
      message: 'Listo, revisa tu bandeja de correo para poder cambiar tu contraseña.',
      buttons: ['Comenzar'],
    });

    await alert.present();
  }

  async modifcontrasena() {
    if (this.correo === "") {
      await this.presentToast('middle', 'Proporciona un correo valido.');
      return;
    } else {
      await this.presentAlert();
      this.router.navigate(['/login']);
    }
  }

  async presentToast(position: 'middle', texto: string) {
    const toast = await this.toastController.create({
      position: position,
      message: texto,
      duration: 2000,
    });
  
    await toast.present();
  }

}
