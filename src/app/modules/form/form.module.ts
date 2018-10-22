import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from '../../components/components.module';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{ path: '', component: FormComponent }
]

@NgModule({
	declarations: [
		FormComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		ComponentsModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	], entryComponents: [
		InputComponent,
		ButtonComponent
	]
})

export class FormModule { }
