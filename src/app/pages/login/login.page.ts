import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string = "";
  contrasena: string = "";

  constructor(private alertController: AlertController, private toastController: ToastController, private router: Router) {}

  ngOnInit() {
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'DIGIGAMES DICE:',
      message: 'Bienvenido!',
      buttons: ['Comienzar'],
    });

    await alert.present();
  }

async ingresoUsuarios() {
  if (this.correo === "" || this.contrasena === "") {
    await this.presentToast('middle', 'Ups!, te faltan campos por completar.');
    return;
  } else {
    await this.presentAlert();
    this.router.navigate(['/catalogo']);
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