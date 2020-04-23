import React, { Component } from 'react';

class ImageSlider extends Component {

    constructor() {
        super();
        this.state = {
            currentSlideIndex: 0
        }//state
    }//constructor

    render() {
        return (
            <h3>I am on slide {this.state.currentSlideIndex}</h3>
        )//return
    }//render

}//class

export default ImageSlider; 
