import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiuser, DataUser, User } from './usuario';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class UsuarioService {

	constructor(private _http: HttpClient) { }

	obtener_usuario(search?: string): Observable<DataUser | any> {
		return this._http.get(environment.host + apiuser.get_user + search);
	}

	guardar_usuario(usuario: User): Observable<any> {
		return this._http.post(environment.host + apiuser.post_user, usuario);
	}

	actualizar_usuario(usuario: User): Observable<any> {
		return this._http.put(environment.host + apiuser.update_user + usuario.id, usuario);
	}

	eliminar_usuario(usuario: User): Observable<any> {
		return this._http.delete(environment.host + apiuser.delete_user + usuario.id);
	}
}
