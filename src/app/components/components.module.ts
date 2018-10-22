import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MaterialModule } from '../material.module';
import { ButtonComponent } from './button/button.component';
import { DynamicFormComponent } from './dinamicform/dinamicform.component';
import { DynamicFieldDirective } from './dinamicform/dinamicform.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [InputComponent, ButtonComponent, DynamicFormComponent, DynamicFieldDirective],
	imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
	exports: [InputComponent, ButtonComponent, DynamicFormComponent, DynamicFieldDirective]
})

export class ComponentsModule { }
