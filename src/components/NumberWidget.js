import React, { Component } from 'react';
import Widget from './Widget';
import '../assets/css/NumberWidget.css';



class NumberWidget extends Component {

    showNumberVal() {

        if (this.props.data.length === 0) {
            return null;
        }

        const dataValue = this.props.data.map((value) => {
            const [valName, valNumber] = value;
            if (value !== undefined) {
                return valNumber;
            }
        })

        return dataValue;
    }





    render() {
        return (
            <Widget headline={this.props.headline} isLoading={this.props.isLoading} colspan={this.props.colspan} rowspan={this.props.rowspan} numberValue={this.showNumberVal()} />
        )
    }

}

export default NumberWidget;