import { Component, OnInit } from '@angular/core';
import{caratula} from './../../modelos/coleccion';

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.page.html',
  styleUrls: ['./coleccion.page.scss'],
})
export class ColeccionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    public cartelera : Array<caratula> = [
      {
        foto:'https://i.pinimg.com/564x/61/53/d4/6153d4eb603719d91a42b53adbf2fa98.jpg',
        nombre:'star wars',
        link: '/starwars'

      },
      {
        foto:'https://i.pinimg.com/564x/13/cf/1d/13cf1d399c43d3000a6dc7d13bffc1c6.jpg'
      },
      {
        foto:'https://i.pinimg.com/564x/09/bf/df/09bfdf794207b7f28d381c80a5cc8db7.jpg'
      },
      {
        foto:'https://i.pinimg.com/564x/6f/2f/70/6f2f70a9541638132dc2dcd378167e7a.jpg'
      },
      {
        foto:'https://i.pinimg.com/564x/1b/71/bf/1b71bf85e021efe15e229f9a5f71381c.jpg'
      },
      {
        foto:'https://i.pinimg.com/564x/5d/f9/7b/5df97b4011d634df6623a8ac0e1c4126.jpg'
      },
      {
        foto:'https://i.pinimg.com/564x/cb/f3/43/cbf3436e595963ee05920cd938e869d3.jpg'
      },
    ]

    public modooscuro (event:Event): void {
      console.log('hola')
      //const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      // toggleDarkTheme(prefersDark.matches);
     // document.body.classList.toggle('dark',prefersDark.matches);
     //document.body.classList.toggle('dark')

    }

    }

