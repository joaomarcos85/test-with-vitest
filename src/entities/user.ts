export interface IUser {
    email: string;
    password: string;
    name: string;
    lastName: string;
}

export class User {
    constructor(private props: IUser) {
        if(!props.email){
            throw new Error('E-mail must be provided');
        }
    }

    public get email() {
        return this.props.email;
    }

    public get password() {
        return this.props.password;
    }

    public get name() {
        return this.props.name;
    }

    public get lastName() {
        return this.props.lastName;
    }
}