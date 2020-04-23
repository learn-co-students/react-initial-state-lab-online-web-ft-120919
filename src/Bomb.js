import React, { Component } from 'react';

class Bomb extends Component {

    constructor (props) {
        super(props);
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }//constructor


    render() {
        if (this.state.secondsLeft > 0) {
            return (
                <h3>{this.state.secondsLeft} seconds left before I go boom!</h3>
            )
        } else {
            return (
                <h3>Boom!</h3>
            )
        }//if
    }//render

}//class

export default Bomb; 
