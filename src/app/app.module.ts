import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'formulario' },
	{ path: 'usuario', loadChildren: "./modules/usuario/usuario.module#UsuarioModule" },
	{ path: 'formulario', loadChildren: "./modules/form/form.module#FormModule" }
]


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes, { useHash: true }),
		BrowserAnimationsModule,
		MaterialModule
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
