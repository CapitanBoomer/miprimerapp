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
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c445321123bd773ce343b9a6396d64aae999873681d34a7aef4759fe97d5592c._RI_V_TTW_.jpg',
      link:'sw1',
      categoria: 'ciencia ficcion',
      nombre: 'Star wars',
      subtitulo: 'La amenza fantasma',
      sinopsis:'La República Galáctica está sumida en el caos. Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolverel asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación del Comercio ha detenido todos los envíos al pequeño planeta de Naboo.',
    },
  ]
}
