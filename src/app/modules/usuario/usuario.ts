
export const apiuser = {
	get_user: "users",
	post_user: "users",
	update_user: "users/",
	delete_user: "users/"
}

export interface DataUser {
	data: User[],
	page: number,
	per_page: number,
	total: number,
	total_pages: number,
}

export class User {
	id?: number;
	first_name: string;
	last_name: string;
	avatar: string;
}

export class Resultado {
	name: string;
	job: string;
	id: number;
	createdAt?: string;
	updatedAt?: string;
}
