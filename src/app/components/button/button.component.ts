import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../public/public";
@Component({
	selector: "app-button",
	template: `
		<div class="w-100 margin-top" [formGroup]="group">
			<button type="submit" mat-raised-button color="primary">{{field.label}}</button>
		</div>
	`,
})
export class ButtonComponent implements OnInit {
	@Input() field: FieldConfig;
	@Input() group: FormGroup;

	constructor() { }

	ngOnInit() { }
}
