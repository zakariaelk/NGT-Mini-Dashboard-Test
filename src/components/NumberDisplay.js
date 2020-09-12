import React, { Component } from 'react';
import '../assets/css/NumberDisplay.css';




class NumberDisplay extends Component {


    render() {

        return (


            <div className="NumberDisplay">
                <span className="value">
                    {this.props.value}
                </span>
            </div>
        )
    }

}

export default NumberDisplay;



