import { Component, OnInit } from '@angular/core';
import {Harrypotter} from './../../../../modelos/harrypotter';
@Component({
  selector: 'app-hp1',
  templateUrl: './hp1.page.html',
  styleUrls: ['./hp1.page.scss'],
})
export class Hp1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public peliculas: Array<Harrypotter> = [
    {
      nombre : 'La piedra filosofal',
      foto:'https://i.pinimg.com/564x/f7/40/4e/f7404e954feb67fa46aac97b7e87bcdd.jpg',
      sinopsis:'El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año'
  },
  ]
}
