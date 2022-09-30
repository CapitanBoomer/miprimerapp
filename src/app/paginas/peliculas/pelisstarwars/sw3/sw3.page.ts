import { Component, OnInit } from '@angular/core';
import {trilogiaprecuelas} from './../../../../modelos/starwars'
@Component({
  selector: 'app-sw3',
  templateUrl: './sw3.page.html',
  styleUrls: ['./sw3.page.scss'],
})
export class Sw3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public peliculas: Array<trilogiaprecuelas> = [
    {
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/fb65b87f2687ba3aeef3eebf5c06fa8b281585b0780d53e0218044a56f209584._UY500_UX667_RI_V_TTW_.jpg',
      link:'sw3',

      categoria: 'ficcion',
      nombre: 'star wars',
      subtitulo: 'La venganza de los sith',
      sinopsis:'¡Guerra! La República se desmorona bajo los ataques del despiadado Lord Sith, el conde Dooku. Hay héroes en ambos bandos, pero el mal está por doquier. En una contundente jugada, el diabólico líder droide, el general Grievous, ha irrumpido en la capital de la República y ha secuestrado al Canciller Palpatine, líder del senado Galáctico. Mientras el ejército droide separatista trata de huir con su valioso rehén, dos caballeros Jedi inician una misión desesperada para liberar al Canciller cautivo.',
    },
  ]
}
