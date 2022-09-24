import { Component, OnInit } from '@angular/core';
import{trilogiaoriginal} from './../../../modelos/starwars';
@Component({
  selector: 'app-originales',
  templateUrl: './originales.page.html',
  styleUrls: ['./originales.page.scss'],
})
export class OriginalesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public peliculas: Array<trilogiaoriginal> = [
    {
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c5d63f400df3a695c9c8c4a6f23017ed26de46819cf848c341a1625547f21c8b._UY500_UX667_RI_V_TTW_.jpg',
      link:'https://www.youtube.com',
      categoria: 'ciencia ficcion',
      nombre: 'Star wars',
      subtitulo: 'La amenza fantasma',
      sinopsis:'La República Galáctica está sumida en el caos. Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolverel asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación del Comercio ha detenido todos los envíos al pequeño planeta de Naboo.',
    },
    {
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c2f898c7decc4930bf08c77e023600fb6bfb7b9087da08434b6d051f90c83623._UY500_UX667_RI_V_TTW_.jpg',
      link:'https://www.youtube.com/watch?v=xZadZJGs9RM&ab_channel=PSIGaming',
      categoria: 'ficcion',
      nombre: 'star wars',
      subtitulo: 'El ataque de los clones',
      sinopsis:'La República Galáctica está sumida en el caos. Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolverel asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación del Comercio ha detenido todos los envíos al pequeño planeta de Naboo.',
    },
    {
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/3e3c1d76d43806ebce39618ca320bcf08dbc1833710fced6b9c832853596da4b._UY500_UX667_RI_V_TTW_.jpg',
      link:'https://www.youtube.com/watch?v=JuoAECMqAf4&ab_channel=DanielChavez',
      categoria: 'ficcion',
      nombre: 'star wars',
      subtitulo: 'La venganza de los sith',
      sinopsis:'¡Guerra! La República se desmorona bajo los ataques del despiadado Lord Sith, el conde Dooku. Hay héroes en ambos bandos, pero el mal está por doquier. En una contundente jugada, el diabólico líder droide, el general Grievous, ha irrumpido en la capital de la República y ha secuestrado al Canciller Palpatine, líder del senado Galáctico. Mientras el ejército droide separatista trata de huir con su valioso rehén, dos caballeros Jedi inician una misión desesperada para liberar al Canciller cautivo.',
    },

  ];
}
