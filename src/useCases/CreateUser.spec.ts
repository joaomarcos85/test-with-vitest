import { describe, it, expect } from 'vitest'
import { User } from '../entities/user';
import { CreateUser } from './CreateUser'

describe('Create an User', () => {
    it('it should be able to create an user', () => {
        const createUser = new CreateUser();

        expect(createUser.execute({
            email: 'test@test.com',
            name: 'John',
            lastName: 'Doe',
            password: '1234'
        })).resolves.toBeInstanceOf(User)
    })
})