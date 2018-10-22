import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from '../usuario';

@Component({
	selector: 'app-formuser',
	templateUrl: './userform.component.html',
	styleUrls: []
})

export class UserFormComponent implements OnInit {
	constructor() { }

	@Input() input: User;
	@Output() output: EventEmitter<User> = new EventEmitter<User>(true);

	ngOnInit() { }

	save_user(ususario: User) {
		this.output.emit(this.input);
	}
}
