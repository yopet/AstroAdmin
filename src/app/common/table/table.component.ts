import { Component, Input, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { TableService } from '../../api/table/table.service';
import { UtilService } from '../../api/util.service'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tabla : string;
  public columns: any;
  public rows: any;
  selected = [];
  buttons = [true,false,false];
  constructor(public tableService: TableService , public Util:  UtilService ,public alertController: AlertController) {
  

  }

  ngOnInit() {
    this.Util.presentLoading();
    this.tableService.Table(this.tabla).subscribe(
      (data) => {
        this.rows = data[this.tabla];
        this.columns = data.columns;
        },
      (error) => {
        console.error(error)
      });
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    this.buttons[1]=true;
    this.buttons[2]=true;
  }


  async Eliminar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmacion',
      message: '¿ Esta seguro de Eliminar este registro ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.Util.presentToast("Eliminacion Exitosa");
          }
        }
      ]
    });

    await alert.present();
  }
  

}
