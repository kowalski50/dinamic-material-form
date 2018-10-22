import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { MatSnackBar } from '@angular/material';
import { User, Resultado } from '../usuario';
import { Router, Route, Routes, ActivatedRoute } from '@angular/router';
import { UrlResolver } from '@angular/compiler';

@Component({
	selector: 'app-editar',
	template: `
		<div class="p-2">
			<label> Editar Usuario </label><br>
			<app-formuser *ngIf="useredit.id" [input]="useredit" (output)="update_user($event)"></app-formuser>
		</div>
	`,
	styles: [``]
})

export class EditarComponent implements OnInit {
	constructor(private _usuario: UsuarioService, public _snackbar: MatSnackBar, private _route: ActivatedRoute, private _router: Router) { }

	useredit = new User();

	ngOnInit() {
		this._usuario.obtener_usuario('/' + this._route.snapshot.params["id"]).subscribe(resp => {
						this.useredit = resp.data;
		})
	}

	update_user(usuario: User) {
		this._usuario.actualizar_usuario(usuario).subscribe((resp: Resultado) => {
			if (resp.updatedAt) {
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
