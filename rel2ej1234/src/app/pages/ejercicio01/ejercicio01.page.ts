import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.page.html',
  styleUrls: ['./ejercicio01.page.scss'],
})
export class Ejercicio01Page implements OnInit {

  a = 0;
  b = 0;
  randomNumber = 0;
  minmax: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  generateNumber() {
    this.randomNumber = +this.a + Math.floor(Math.random() * (this.b - this.a + 1));
  }

  clickNumber() {
    if (this.minmax) {
      this.randomNumber = this.a
      this.minmax = false;
    } else {
      this.randomNumber = this.b;
      this.minmax = true;
    }
  }
}
