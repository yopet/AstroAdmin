import { Injectable } from '@angular/core';
import { LoadingController ,ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor( public loadingController: LoadingController , public toastController: ToastController) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espera por favor...',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000 ,
      position: 'bottom'
    });
    toast.present();
  }
}
