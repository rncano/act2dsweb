import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListarComponent } from "./components/usuarios-listar/usuarios-listar.component";
import { VistaComponent } from "./components/vista/vista.component";
import { ProvinciaArgentinaComponent } from "./components/provincia-argentina/provincia-argentina.component";

const routes: Routes = [
	{
		path: '',
		component: ProvinciaArgentinaComponent
	},

	{
		path: 'usuarios/listar',
		component: UsuariosListarComponent
	},
	{
		path: 'usuarios/vista',
		component: VistaComponent
	},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
