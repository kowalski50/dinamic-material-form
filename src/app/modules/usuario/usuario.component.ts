import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-usuario',
	template: `
		<label> CRUD Usuario </label>
		<mat-divider></mat-divider>
		<router-outlet></router-outlet>`,
	styles: [``]
})
export class UsuarioComponent implements OnInit {
	constructor() { }

	ngOnInit(): void { }
}
