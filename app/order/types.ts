export type Orden = {
    direccionRecoleccion: string,
    fecha: Date,
    nombres: string,
    apellidos: string,
    correo: string
    telefono: string,
    direccionDestinatario: string,
    departamento: string,
    municipio: string,
    puntoReferencia: string,
    indicaciones: string,
    items: OrdenItem[],
  }
  
  export type OrdenItem = {
    largo: number,
    ancho: number,
    alto: number,
    peso: number,
    contenido: string,
  }