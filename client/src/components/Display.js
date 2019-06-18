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
            <p>{this.props.stat.inning % 2 === 0 ? "Bottom" : "Top"} of {Math.ceil(this.props.stat.inning/2)} Inning</p>
            <p>Outs: {this.props.stat.out}</p>
            
            </>
        )
    }
}

export default Display;