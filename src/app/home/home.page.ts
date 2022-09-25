import { Component } from '@angular/core';
import{Coleccion} from './../modelos/coleccion';
import{caratula} from './../modelos/coleccion';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
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
  nombre :'piratas del caribe'
},
{
  nombre :'alien'
},
{
  nombre :'depredador'
},

]
public cartelera : Array<caratula> = [
  {
    foto:'https://i.pinimg.com/564x/61/53/d4/6153d4eb603719d91a42b53adbf2fa98.jpg',
    nombre:'star wars'
  },
  {
    foto:'https://i.pinimg.com/564x/13/cf/1d/13cf1d399c43d3000a6dc7d13bffc1c6.jpg'
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


}
