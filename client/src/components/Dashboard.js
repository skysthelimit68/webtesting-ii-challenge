import React from 'react';


/*
- provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the type of hit (single, double, etc).
- changes recorded on this component should update the information shown by the `Display` component.
*/

class Dashboard extends React.Component {
    
    render() {
        return (
            <>
            <button role="strikeButton" onClick={this.props.recordStrikes}>Strike</button>
            <button role="ballButton" onClick={this.props.recordBalls}>Ball</button>
            <button role="foulButton" onClick={this.props.recordFoul}>Foul</button>
            <button role="hitButton" onClick={this.props.recordHit}>Hit</button>
            </>
        )
    }
}

export default Dashboard;