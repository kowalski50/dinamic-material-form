import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { MatSnackBar } from '@angular/material';
import { DataUser, User } from '../usuario';

@Component({
	selector: 'app-lista',
	templateUrl: './lista.component.html'
})

export class ListaComponent implements OnInit {

	param_page = "?page=";

	constructor(private _usuario: UsuarioService, public _snackbar: MatSnackBar) { }

	displayedColumns: string[] = ['id', 'first_name', 'last_name', 'avatar', 'select'];
	datauser: DataUser;
	current_user = new User();

	ngOnInit() {
		this.get_users(this.param_page + 1);
	}


	new_user() {
		this.current_user = new User();
	}

	get_current_user(usuario: User) {
		this.current_user = usuario;
	}

	get_users(filtro?: string) {
		this._usuario.obtener_usuario(filtro).subscribe(users => {
			this.datauser = users;
		})
	}
}
