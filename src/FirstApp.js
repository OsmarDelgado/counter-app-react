import React from "react"
import PropTypes from "prop-types"
// import React, { Fragment } from "react"

const FirstApp = ( { hello, subtitle } ) => {
    // const greetings = 'Hello World'
    // const object = {
    //     name: 'Osmar',
    //     age: 26
    // }

    return (
        <>
            <h1>{ hello }</h1>
            {/* <pre>{ JSON.stringify( object, null, 4 ) }</pre> */}
            <p>{ subtitle }</p>
        </>
    )
}

FirstApp.propTypes = {
    hello : PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle : 'Subtitle'
}

export default FirstApp
