import { Component, OnInit } from '@angular/core';
import{fase} from './../../../modelos/starwars';
import{Coleccion} from './../../../modelos/coleccion'
@Component({
  selector: 'app-fases',
  templateUrl: './fases.page.html',
  styleUrls: ['./fases.page.scss'],
})
export class FasesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public coleccion: Array<Coleccion> = [
    {
      nombre :'Star wars',
      link:'/starwars'
    },
    {
      nombre :'Harry potter'
    },
    {
      nombre :'el señor de los anillos'
    },
    {
      nombre :'Jurasir park'
    },
    {
      nombre :'piratas del caribe'
    },
    {
      nombre :'alien'
    },
    {
      nombre :'depredador'
    },

    ]

  public fases: Array<fase> = [
    {
    fase : 'Epoca separatista',
    link:'/precuelas',
    imagenfase:'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/BMHS7JFY4JFETG2N26IT2V7A7M.jpg',
    sinopsisfase:' el entrenamiento del joven Anakin Skywalker, bajo la tutela del maestro Jedi Obi-Wan Kenobi, durante una época de inestabilidad política derivada de una disputa entre la República Galáctica y la Federación de Comercio.'

    },
    {
      fase : 'Epoca rebelion',
      link:'/originales',
      imagenfase:'https://sm.ign.com/t/ign_latam/screenshot/default/cloud_efch.1280.jpg',
      sinopsisfase:' as aventuras de Luke Skywalker desde los desiertos de Tatooine hasta las planicies heladas de Hoth y más allá, en su batalla para liberar la galaxia del malvado emperador Palpatine.'

      },
      {
        fase : 'Epoca de la nueva orden',
        link:'',
        imagenfase:'https://screenhubweb.files.wordpress.com/2019/08/the-first-order-star-wars-screenhub-entertainment.jpeg',
        sinopsisfase:' el entrenamiento del joven Anakin Skywalker, bajo la tutela del maestro Jedi Obi-Wan Kenobi, durante una época de inestabilidad política derivada de una disputa entre la República Galáctica y la Federación de Comercio.'

        }
  ]

}
