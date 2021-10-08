import React from 'react'
import CounterApp from '../CounterApp'
import { shallow } from 'enzyme'

describe( 'Tests in CounterApp', () => {
    let wrapper = shallow( <CounterApp /> )
    
    beforeEach( () => {
        wrapper = shallow( <CounterApp /> )
    } )

    test( 'Should show app successfully', () => {
        expect( wrapper ).toMatchSnapshot()
    } )

    test( 'Should have 100 as default value', () => {
        const defaultValue = parseInt( wrapper.find( 'h2' ).text() )

        expect( defaultValue ).toBe( 100 )
    } )

    test( 'Should increase counter with +1', () => {
        const btn1 = wrapper.find( 'button' ).at( 0 ).simulate( 'click' )

        const defaultValue = parseInt( wrapper.find( 'h2' ).text() )
        
        expect( defaultValue ).toBe( 101 )
    } )

    test( 'Should decrease counter with -1', () => {
        const btn3 = wrapper.find( 'button' ).at( 2 ).simulate( 'click' )

        const defaultValue = parseInt( wrapper.find( 'h2' ).text() )
        
        expect( defaultValue ).toBe( 99 )
    } )

    test( 'Should reset counter with Reset', () => {
        wrapper = shallow( <CounterApp value={ 105 } /> )

        const btn1 = wrapper.find( 'button' ).at( 0 ).simulate( 'click' )
        const btn2 = wrapper.find( 'button' ).at( 1 ).simulate( 'click' )

        const defaultValue = parseInt( wrapper.find( 'h2' ).text() )
        
        expect( defaultValue ).toBe( 105 )
    } )
} )