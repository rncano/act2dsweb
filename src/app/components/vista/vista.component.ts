import { Component, OnInit } from '@angular/core';
import { Provincia } from "src/app/models/provinciaModel";
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  titulo:String ="REPÚBLICA ARGENTINA";
  seleccionMult:any[] = [];

  usuarios: Provincia[]; // Esta parte llama a la clase models

  revelar:boolean=false;// para ocultar tabla

  seleccionradio:String="";
  videos: any;

  seleccionProvincia: Provincia | null = null;

  constructor(private usuariosService:UsuariosService) {
    this.usuarios = usuariosService.listarUsuarios();
    console.log(this.titulo);
    console.log(this.usuarios)

  
  }
  procesar(): void {
    console.log("Capturando el formulario"); };
    

    selectedRegion(region: string) {
      this.seleccionradio = region;
      console.log(`Región Seleccionada: ${region}`);

      

       // Buscar la provincia correspondiente a la región seleccionada
      const provincia = this.usuarios.find((usuario) => usuario.region === region);

      if (provincia) {
    // Obtener la URL del video de la provincia
        const videoUrl = provincia.video;

    // Hacer lo que necesites con la URL del video (por ejemplo, cargarlo en un reproductor de video)
    console.log(`URL del video de la provincia: ${videoUrl}`);
    
  }
    }



  addRemoveItem($event:any):void{
    console.log("Capturando el checkbox");
     //Si checked es verdadero agregamos un item al array seleccionMult. Sino, remover 
     if($event.target.checked){
      //push agrega un nuevo elemento al array
      this.seleccionMult.push($event.target.value);
    }
    else{
      //splice quita elementos del array. Recibe splice(inicio, cuantos)
      //indexOf devuelve la posicion en el array del valor pasado por parametro
      this.seleccionMult.splice(this.seleccionMult.indexOf($event.target.value),1);
    }
	//el metodo sort mantiene el orden del array. Es conveniente porque las acciones del usuario no lo son
    this.seleccionMult.sort();
    console.log(this.seleccionMult);
    
    this.revelar = $event.target.checked;

    
  };



  ngOnInit(): void {
  }

}
