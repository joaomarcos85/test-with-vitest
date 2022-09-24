import { User } from "../entities/user";

export interface CreateUserRequest {
    email: string;
    password: string;
    name: string;
    lastName: string;
}

export type CreateUserResponse = User

export class CreateUser {
    async execute({
        email,
        password,
        name,
        lastName
    }: CreateUserRequest): Promise<CreateUserResponse> {
        const user = new User({
            email,
            password,
            name,
            lastName
        })
        return user
    }
}