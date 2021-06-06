import React from 'react';

function Greet(props) {
const {name,movie} = props;
    return (
        <h1>
            Greet {name} in Movie {movie}
        </h1>
    )
}

export default Greet
