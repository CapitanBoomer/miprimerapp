import { Component, OnInit } from '@angular/core';
import {trilogiaprecuelas} from './../../../../modelos/starwars'
@Component({
  selector: 'app-sw2',
  templateUrl: './sw2.page.html',
  styleUrls: ['./sw2.page.scss'],
})
export class Sw2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public peliculas: Array<trilogiaprecuelas> = [
    {
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e47eb656e9abb068c38b7d2c019a4e4850bb6410006a39cba35acd127eab7f9f._UY500_UX667_RI_V_TTW_.jpg',
      link:'sw2',
      categoria: 'ficcion',
      nombre: 'star wars',
      subtitulo: 'El ataque de los clones',
      sinopsis:'La República Galáctica está sumida en el caos. Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolverel asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación del Comercio ha detenido todos los envíos al pequeño planeta de Naboo.',
    },
  ]
}
