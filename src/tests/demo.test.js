describe( 'Pruebas en el archivo demo.test.js', () => {
    test( 'Deben de ser iguales los dos strings', () => {
        // 1. Initialization
        const message = 'Hello World'
    
        // 2.
        const message2 = `Hello World`
    
        // 3.
        expect( message ).toBe( message2 )
    
    } )
} )