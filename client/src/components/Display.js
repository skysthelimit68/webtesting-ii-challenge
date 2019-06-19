import React from 'react';

/*
- display the count of `balls` and `strikes` for the at-bat.
- should be updated when the user records activity on the `Dashboard` component.
*/

class Display extends React.Component {
    render() {
        const inning = Math.ceil(this.props.stat.inning/2);
        const wd = inning === 1 ? "st" : inning === 2 ? "nd" : inning === 3 ? "rd" : "th";
        return(
            <>
            <p>Strikes: {this.props.stat.strikes}</p>
            <p>Balls: {this.props.stat.balls}</p>
            <p>{this.props.stat.inning % 2 === 0 ? "Bottom" : "Top"} of {inning}{wd} Inning</p>
            <p>Outs: {this.props.stat.out}</p>
            
            </>
        )
    }
}

export default Display;