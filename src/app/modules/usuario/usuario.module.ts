import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material.module';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserFormComponent } from './component/userform.component';
import { EditarComponent } from './editar/editar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
	{
		path: '', component: UsuarioComponent,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'lista' },
			{ path: 'lista', component: ListaComponent },
			{ path: 'editar/:id', component: EditarComponent },
			{ path: 'nuevo', component: NuevoComponent }
		]
	},

]

@NgModule({
	declarations: [UsuarioComponent, ListaComponent, UserFormComponent, EditarComponent, NuevoComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		HttpClientModule, MaterialModule, ReactiveFormsModule, FormsModule
	],
	providers: [UsuarioService]
})

export class UsuarioModule { }
