import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  peliculas;
  comprob: string;

  constructor(
    private http: HttpClient, 
    private dataService: DataService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.dataService.getLocalData().subscribe(data => {
      this.peliculas = data;
    })
  }

  details(id: string) {
    if (this.comprob != id) {
      this.comprob = id;
    } else if (this.comprob == id) {
      this.comprob = null;
    }
  }

  async presentAlertConfirm(id: string) {
    const alert = await this.alertController.create({
      header: 'Borrar Película',
      message: `Vas a borrar la película <strong>${id}</strong>`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          handler: () => this.deleteTask(id)
        }
      ]
    });
    await alert.present();
  }

  deleteTask(id) {
    this.peliculas = this.peliculas.filter(m => m.title != id);
  }

}
