import { expect, test } from 'vitest'
import { User } from './user'

test('create an user', () => {
    const user = new User({
        email: 'test@test.com',
        name: 'John',
        lastName: 'Doe',
        password: '1234'
    });

    expect(user).toBeInstanceOf(User);
    expect(user.email).toEqual('test@test.com')
    expect(user.name).toEqual('John')
    expect(user.lastName).toEqual('Doe')
    expect(user.password).toEqual('1234')
})

test('cannot create an user with empty email', () => {
    expect(() => {
        return new User({
            email: '',
            name: 'Test',
            lastName: 'Test',
            password: '1234'
        })
    }).toThrow()
})