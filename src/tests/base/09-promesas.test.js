import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes"

describe( 'Tests in the 09-promesas.js', () => {
    test( 'Return a hero async', ( done ) => {
        const id = 1

        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toBe( heroes[0] )
                done()
            } )
    } )

    test( 'Return an error if hero id does not exist', ( done ) => {
        const id = 10

        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe( 'No se pudo encontrar el héroe' )
                done()
            } )
    } )
} )