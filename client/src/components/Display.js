import React from 'react';

/*
- display the count of `balls` and `strikes` for the at-bat.
- should be updated when the user records activity on the `Dashboard` component.
*/

class Display extends React.Component {
    render() {
        return(
            <>
            <p>Strikes: {this.props.stat.strikes}</p>
            <p>Balls: {this.props.stat.balls}</p>
            </>
        )
    }
}

export default Display;