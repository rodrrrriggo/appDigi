import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = "";
  correo: string = "";
  numero: string = "";
  contrasena: string = "";
  confirmarContrasena: string = "";

  constructor(
    public alertController: AlertController, private toastController: ToastController, private router: Router) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'DIGIGAMES DICE:',
      message: 'Registro Exitoso!',
      buttons: ['Continuar'],
    });

    await alert.present();
  }

  async ingresoUsuarios() {
    if (this.nombre === "" || this.correo === "" || this.numero === "" || this.contrasena === "") {
      await this.presentToast('middle', 'Si quieres unirte a DIGIGAMES, completa todos los campos.');
      return;
    }

    if (this.contrasena !== this.confirmarContrasena) {
      await this.presentToast('middle', 'Las contraseñas no coinciden.');
      return;
    }

    const nombreValido = /^[a-zA-Z ]+$/.test(this.nombre);
    if (!nombreValido) {
      await this.presentToast('middle', 'El nombre no puede contener números.');
      return;
    }

    await this.presentAlert();
    this.router.navigate(['/login']);
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
