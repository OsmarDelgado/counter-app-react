import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe( 'Tests in 05-funciones.js', () => {
    test( 'Return an object in method getUser', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect( user ).toEqual( userTest )
    } )

    // getUserActivo return an object
    test( 'Return an object in method getUserActivo', () => {
        const name = 'Osmar'

        const userTest = {
            uid: 'ABC567',
            username: 'Osmar'
        }

        const userActive = getUsuarioActivo( name )

        expect( userActive ).toEqual( userTest )
    } )
} )