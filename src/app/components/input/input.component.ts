import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../public/public";

@Component({
	selector: "app-input",
	template: `
		<mat-form-field class="w-100" [formGroup]="group">
			<input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
			<ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
				<mat-error *ngIf="group.get(field.name).hasError(validation?.name)">{{validation.message}}</mat-error>
			</ng-container>
		</mat-form-field>
	`,
})

export class InputComponent implements OnInit {
	@Input() field: FieldConfig;
	@Input() group: FormGroup;

	constructor() { }
	ngOnInit() { }
}
