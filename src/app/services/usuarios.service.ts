import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { Provincia } from "src/app/models/provinciaModel";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService{
	API_URI = 'http://localhost:3000/user';
	usuarios: Provincia[];
	
	constructor(/*private http: HttpClient*/){

   this.usuarios= [{
      "id": "1",
      "nombre": "Buenos Aires",
      "capital": "La Plata",
      "rutaImagen": "./assets/media/bsas.jpg",
      "descripcion": "Es la provincia más poblada de Argentina y alberga la capital del país, Buenos Aires. Es conocida por sus playas, sus estancias y sus barrios históricos.",
      "region":"Centro",
      //"video":"https://www.youtube.com/embed/UhXwtmuuiQs"
    },
    {
      "id": "2",
      "nombre": "Córdoba",
      "capital": "Córdoba",
      "rutaImagen": "./assets/media/cordoba.jpg",
      "descripcion": "Es una provincia ubicada en el centro del país, conocida por sus paisajes serranos y su historia colonial. Es un destino popular para el turismo interno, especialmente para aquellos que buscan aventuras al aire libre.",
      "region":"Centro",
      //"video": "https://www.youtube.com/embed/FtD7hBacnTo"
    },
    {
      "id": "3",
      "nombre": "Santa Fé",
      "capital": "Santa Fé",
      "rutaImagen": "./assets/media/santafe.jpg",
      "descripcion": "Esta provincia se encuentra en el norte de Argentina, y es la segunda más poblada del país. Cuenta con una amplia variedad de paisajes, desde las playas del río Paraná hasta las llanuras del oeste de la provincia.",
      "region":"Centro",
      //"video":"https://www.youtube.com/embed/_QppiYQf_6o"
    },
    {
      "id": "4",
      "nombre": "Mendoza",
      "capital": "Mendoza",
      "rutaImagen": "./assets/media/mendoza.jpg",
      "descripcion": "Es una provincia ubicada en el oeste de Argentina, conocida por sus viñedos y sus paisajes de montañas. Es un destino popular para el turismo enológico, y también es una base popular para aquellos que desean explorar los Andes.",
      "region":"Cuyo",
     // "video":"https://www.youtube.com/watch?v=3dzO0avyDhI"
    },
    {
      "id": "5",
      "nombre": "Túcuman",
      "capital": "Túcuman",
      "rutaImagen": "./assets/media/tucuman.jpg",
      "descripcion": "Esta provincia se encuentra en el noroeste de Argentina, y es conocida por su historia colonial y sus paisajes de montañas. Es el hogar de las ruinas de Quilmes, un importante sitio arqueológico que data de la época precolombina.",
      "region":"NOA",
     // "video":"https://www.youtube.com/watch?v=3dzO0avyDhI"
    },
    {
      "id": "6",
      "nombre": "Salta",
      "capital": "Salta",
      "rutaImagen": "./assets/media/salta.jpg",
      "descripcion": "Esta provincia se encuentra en el noroeste de Argentina, y es conocida por su historia colonial y sus paisajes de montañas. Es el hogar de las ruinas de Quilmes, un importante sitio arqueológico que data de la época precolombina.",
      "region":"NOA",
     // "video":"https://www.youtube.com/watch?v=W_n6DyZD2oI"
    },
    {
      "id": "7",
      "nombre": "San Juan",
      "capital": "San Juan",
      "rutaImagen": "./assets/media/sanJuan.jpg",
      "descripcion": "Esta provincia se encuentra en el noroeste de Argentina, y es conocida por su historia colonial y sus paisajes de montañas. Es el hogar de las ruinas de Quilmes, un importante sitio arqueológico que data de la época precolombina.",
      "region":"Cuyo",
      //"video":"https://www.youtube.com/watch?v=UhXwtmuuiQs"
    },
  
    {
      "id": "8",
      "nombre": "San Luis",
      "capital": "San Luis",
      "rutaImagen": "./assets/media/sanLuis.jpg",
      "descripcion": "Esta provincia se encuentra en el noroeste de Argentina, y es conocida por su historia colonial y sus paisajes de montañas. Es el hogar de las ruinas de Quilmes, un importante sitio arqueológico que data de la época precolombina.",
      "region":"Cuyo",
    //  "video":"https://www.youtube.com/watch?v=KYXsr3ADhoA"
    }

  ]}

	listarUsuarios(){
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		//return this.http.get(`${this.API_URI}/list`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
    return this.usuarios;
	}
	
	buscarUsuario(id:string){
		//return this.http.get(`${this.API_URI}/find/${id}`);
	}
}

