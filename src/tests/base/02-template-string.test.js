import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe( 'Tests in 02-template-string.js', () => {
    test( 'Test in the method getSaludo', () => {
        const name = 'Osmar'

        const saludo = getSaludo( name )

        expect( saludo ).toBe( 'Hola ' + name + '!' )
    } )

    // getSaludo return Hola David! if does not an argument
    test( 'Test for default argument in the method getSaludo', () => {
        const saludo = getSaludo()

        expect( saludo ).toBe( 'Hola David!' )
    } )
} )