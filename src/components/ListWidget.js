import React, { Component } from 'react';
import Widget from './Widget';
import '../assets/css/NumberWidget.css';



class ListWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.data
        })

        let newState = { loading: false };

        setTimeout(() => {
            this.setState(newState);
        }, 2000)

    }


    render() {

        return (
            <Widget headline={this.props.headline} isLoading={this.state.loading} listData={this.state.data} colspan={this.props.colspan} rowspan={this.props.rowspan} />
        )

    }

}


export default ListWidget;