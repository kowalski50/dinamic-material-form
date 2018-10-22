import { Component } from '@angular/core';
import { FieldConfig } from '../../public/public';
import { Validators, } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent {

	constructor() { }

	regConfig: FieldConfig[] = [
		{
			type: "input",
			label: "Username",
			inputType: "text",
			name: "name",
			value: '',
			validations: [
				{
					name: "required",
					validator: Validators.required,
					message: "Name Required"
				}
			]
		},
		{
			type: "input",
			label: "Email Address",
			inputType: "email",
			name: "email",
			value: '',
			validations: [
				{
					name: "required",
					validator: Validators.required,
					message: "Email Required"
				}
			]
		},
		{
			type: "input",
			label: "Password",
			inputType: "password",
			name: "password",
			value: '',
			validations: [
				{
					name: "required",
					validator: Validators.required,
					message: "Password Required"
				}
			]
		}, {
			type: "button",
			label: "Save"
		}
	];


	adding: boolean = false;
	add_input(name, event: Event) {
		if (name == '') {
			alert("Ingresar input name");
			return;
		}

		event.preventDefault();
		event.stopPropagation();
		this.adding = true;

		this.regConfig[this.regConfig.length - 1] = {
			type: "input",
			label: name + " Input",
			inputType: "text",
			name: name,
			validations: [
				{
					name: "required",
					validator: Validators.required,
					message: name + " Required"
				}
			]
		}

		this.regConfig.push({
			type: "button",
			label: "Save"
		})

		setTimeout(() => {
			this.adding = false;
		}, 50);

	}

	submit(value: any) {
		alert(JSON.stringify(value));
	}
}
