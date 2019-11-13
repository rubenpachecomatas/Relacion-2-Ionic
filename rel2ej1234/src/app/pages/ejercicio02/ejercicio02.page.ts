import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  pulgadas = 0;
  centimetros = 0;
  metros = 0;
  unidad: string;
  numero;
  comprob = false;

  constructor() { }

  ngOnInit() {
  }

  convert() {
    if (this.unidad == 'pulgadas') {
      this.pulgadas = this.numero;
      this.centimetros = this.numero * 2.54;
      this.metros = this.centimetros / 100;
      this.comprob = true;
    } else if (this.unidad == 'centimetros') {
      this.centimetros = this.numero;
      this.pulgadas = this.numero / 2.54;
      this.metros = this.centimetros / 100;
      this.comprob = true;
    } else if (this.unidad == 'metros') {
      this.metros = this.numero;
      this.centimetros = this.metros * 100;
      this.pulgadas = this.centimetros / 2.54;
      this.comprob = true;
    }
    console.log(this.metros);
    console.log(this.centimetros);
    console.log(this.pulgadas);
  }
}
