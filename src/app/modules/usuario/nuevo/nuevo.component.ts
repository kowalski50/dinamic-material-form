import { Component, OnInit } from '@angular/core';

import { isNullOrUndefined } from 'util';
import { UsuarioService } from '../usuario.service';
import { MatSnackBar } from '@angular/material';
import { User, Resultado } from '../usuario';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nuevo',
	template: `
		<div class="p-2">
			<br>
			<label> Nuevo Usuario </label>
			<br>
			<app-formuser [input]="user" (output)="save_user($event)"></app-formuser>
		</div>
	`,
	styles: [``]
})

export class NuevoComponent implements OnInit {
	constructor(private _usuario: UsuarioService, public _snackbar: MatSnackBar, private _router: Router) { }
	user = new User();

	ngOnInit(): void { }

	save_user(usuario: User) {
		this._usuario.guardar_usuario(usuario).subscribe((resp: Resultado) => {
			if (resp.createdAt) {
				this.send_message(JSON.stringify(resp), 'close');
				this._router.navigate(["/usuario/lista"]);
			}
		}, error => {
			this.send_message(JSON.stringify(error), 'close');
		})
	}

	send_message(message: string, action: string) {
		this._snackbar.open(message, action, {
			duration: 3000,
		});
	}
}
