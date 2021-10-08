import React from 'react'
import FirstApp from '../FirstApp'
import { shallow } from 'enzyme'

describe( 'Test in FirstApp', () => {
    // test( 'Shold show message "Hello, I am Osmar"', () => {
    //     const greetings = "Hello, I am Osmar"

    //     const { getByText } = render( <FirstApp hello={ greetings } /> )

    //     expect( getByText( greetings ) ).toBeInTheDocument()
    // } )

    test( 'Should show app successfully', () => {
        const greetings = 'Hello, I am Osmar'
        const wrapper = shallow( <FirstApp hello={ greetings } /> )

        expect( wrapper ).toMatchSnapshot()
    } )

    test( 'Should show subtitile sent by props', () => {
        const greetings = 'Hello, I am Osmar'
        const subtitle = 'Subtitle!!!'
        const wrapper = shallow( <FirstApp hello={ greetings } subtitle={ subtitle } /> )

        const textPha = wrapper.find( 'p' ).text()

        expect( textPha ).toBe( subtitle )
    } )
} )