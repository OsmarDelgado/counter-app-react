import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp.js"
import heroes from "../../data/heroes.js"

describe( 'Tests in 08-imp-exp.js', () => {
    test( 'Return a hero by ID', () => {
        const id = 1
        const hero = getHeroeById( id )

        const heroData = heroes.find( hero => hero.id === id )

        expect( hero ).toEqual( heroData )
    } )

    test( 'Return undefined if hero does not exist', () => {
        const id = 10
        const hero = getHeroeById( id )

        expect( hero ).toBe( undefined )
    } )

    // Return an array with DC heroes
    // owner
    // toEqual to filter array
    test( 'Return all DC heroes', () => {
        const owner = 'DC'

        // const heroesDCTest = [
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        // ]

        const heroesDCTest = heroes.filter( hero => hero.owner === owner )
        
        const heroesDC = getHeroesByOwner( owner )

        expect( heroesDC ).toEqual( heroesDCTest )
    } )

    // Return an array with Marvel heroes
    // Length = 2
    // toBe
    test( 'Return all Marvel heroes', () => {
        const owner = 'Marvel'

        const heroesMarvel = getHeroesByOwner( owner )

        expect( heroesMarvel.length ).toBe( 2 )
    } )

} )