import { Component, OnInit } from '@angular/core';
import {fase} from './../../../modelos/starwars'
@Component({
  selector: 'app-saga',
  templateUrl: './saga.page.html',
  styleUrls: ['./saga.page.scss'],
})
export class SagaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public fases: Array<fase> = [
    {
    fase : 'La piedra filosofal',
    link:'/hp1',
    imagenfase:'https://i.pinimg.com/564x/f7/40/4e/f7404e954feb67fa46aac97b7e87bcdd.jpg',
    sinopsisfase:'El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año'

    },
    {
      fase : 'La camara secreta',
      link:'/hp2',
      imagenfase:'https://i.pinimg.com/564x/33/ee/c7/33eec7e2d70a618f176e1a7bb9f2d198.jpg',
      sinopsisfase:'Harry Potter y los estudiantes de segundo año investigan una malévola amenaza para sus compañeros de clases de Hogwarts.'

      },
      {
        fase : 'El pricionero de Askaban',
        link:'/hp3',
        imagenfase:'https://i.pinimg.com/564x/f9/e9/66/f9e9663a8d77a38621cb3fe93be2b966.jpg',
        sinopsisfase:' El tercer año de estudios de Harry en Hogwarts se ve amenazado por la fuga de Sirius Black de la prisión de Azkaban. Al parecer, se trata de un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter.'

        },

  ]

}
