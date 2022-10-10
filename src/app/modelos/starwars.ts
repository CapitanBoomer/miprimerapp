export interface fase {
  id?:string,
  fase:string,
  link:string,
  imagenfase:string,
  sinopsisfase:string
}

export interface trilogiaprecuelas {
  id?:string,
  poster?:string,
  link:string,
  categoria?:string,
  nombre:string,
  subtitulo?:string,
  sinopsis:string
}

export interface trilogiaoriginal {
  id?:string,
  poster?:string,
  link:string,
  categoria?:string,
  nombre:string,
  subtitulo?:string,
  sinopsis:string
}

export interface trilogiadisney {
  id?:string,
  poster:string,
  link:string,
  categoria?:string,
  nombre:string,
  subtitulo?:string,
  sinopsis:string
}

export type Info = {
  name: string;
  url: string;
}
export interface ResultadoPeticion {
  count: number;
  next?: string;
  previous?: string;
  results: Array<Info>;
}
