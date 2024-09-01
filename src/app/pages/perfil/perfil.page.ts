import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombre: string = "";
  correo: string = "";
  contrasena: string = "";

  constructor(
    public alertController: AlertController, private toastController: ToastController, private router: Router) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'DIGIGAMES DICE:',
      message: 'Perfin Modificado!',
      buttons: ['Continuar'],
    });

    await alert.present();
  }

  async ingresoUsuarios() {
    if (this.nombre === "" || this.correo === "" || this.contrasena === "") {
      await this.presentToast('middle', 'Faltan campos por modificar!');
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
