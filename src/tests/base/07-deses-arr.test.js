import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base/07-deses-arr'

describe( 'Test in 07-deses-arr.js', () => {
    test( 'Return a string and a number', () => {
        const arr = retornaArreglo()

        const arrTest = ['ABC', 123]

        expect( arr ).toEqual( arrTest )

        const [ letters, numbers ] = retornaArreglo()

        expect( letters ).toBe( arrTest[0] )
        expect( typeof letters ).toBe( 'string' )

        expect( numbers ).toBe( arrTest[1] )
        expect( typeof numbers ).toBe( 'number' )
    } )
} )