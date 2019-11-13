import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {

  carro;
  total = 0;
  nombre = "";
  precio = 0;
  cantidad = 0;

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getLocalData().subscribe(data => {
      console.log(data);
      this.carro = data;
      this.carro.forEach(item => {
        this.total += (item.price * item.quantity);
      });
      console.log(this.total);
    })
  }

  addItem() {
    this.carro.push({item: this.nombre, price: this.precio, quantity: this.cantidad});
    this.total += this.precio * this.cantidad;
  }

  

}
