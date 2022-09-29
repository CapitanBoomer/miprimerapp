import { Component, OnInit } from '@angular/core';
import {trilogiaprecuelas} from './../../../modelos/starwars'
@Component({
  selector: 'app-precuelas',
  templateUrl: './precuelas.page.html',
  styleUrls: ['./precuelas.page.scss'],
})
export class PrecuelasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public peliculas: Array<trilogiaprecuelas> = [
    {
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/689056999c42a941b6c78ee4c975a0bcf6d3308a3ed470b2262f0934245a5d30._UY500_UX667_RI_V_TTW_.jpg',
      link:'sw1',
      categoria: 'ciencia ficcion',
      nombre: 'Star wars',
      subtitulo: 'La amenza fantasma',
      sinopsis:'La República Galáctica está sumida en el caos. Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolverel asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación del Comercio ha detenido todos los envíos al pequeño planeta de Naboo.',
    },
    {
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e47eb656e9abb068c38b7d2c019a4e4850bb6410006a39cba35acd127eab7f9f._UY500_UX667_RI_V_TTW_.jpg',
      link:'https://www.youtube.com/watch?v=xZadZJGs9RM&ab_channel=PSIGaming',
      categoria: 'ficcion',
      nombre: 'star wars',
      subtitulo: 'El ataque de los clones',
      sinopsis:'La República Galáctica está sumida en el caos. Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolverel asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación del Comercio ha detenido todos los envíos al pequeño planeta de Naboo.',
    },
    {
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/fb65b87f2687ba3aeef3eebf5c06fa8b281585b0780d53e0218044a56f209584._UY500_UX667_RI_V_TTW_.jpg',
      link:'https://www.youtube.com/watch?v=JuoAECMqAf4&ab_channel=DanielChavez',
      categoria: 'ficcion',
      nombre: 'star wars',
      subtitulo: 'La venganza de los sith',
      sinopsis:'¡Guerra! La República se desmorona bajo los ataques del despiadado Lord Sith, el conde Dooku. Hay héroes en ambos bandos, pero el mal está por doquier. En una contundente jugada, el diabólico líder droide, el general Grievous, ha irrumpido en la capital de la República y ha secuestrado al Canciller Palpatine, líder del senado Galáctico. Mientras el ejército droide separatista trata de huir con su valioso rehén, dos caballeros Jedi inician una misión desesperada para liberar al Canciller cautivo.',
    },

  ];
}
