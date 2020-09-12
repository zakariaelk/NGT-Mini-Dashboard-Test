import React, { Component } from 'react';
import Widget from './Widget';
import '../assets/css/NumberWidget.css';



class NumberWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        }
    }

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


    componentDidMount() {

        let newState = { loading: false };


        this.setState({
            data: this.props.data,
        })


        setTimeout(() => {
            this.setState(newState);
        }, 1000)


    }


    render() {
        return (
            <Widget headline={this.props.headline} isLoading={this.state.loading} numberValue={this.showNumberVal()} />
        )
    }

}

export default NumberWidget;