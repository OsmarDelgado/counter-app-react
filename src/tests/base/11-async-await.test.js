import { getImagen } from "../../base/11-async-await"

describe( 'Test in 11-async-await.js', () => {
    test( 'Return the image url', async () => {
        const url = await getImagen()

        console.log( url )

        expect( typeof url ).toBe( 'string' )
    } )
} )