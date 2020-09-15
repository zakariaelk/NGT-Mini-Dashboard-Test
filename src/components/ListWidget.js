import React, { Component } from 'react';
import Widget from './Widget';
import '../assets/css/NumberWidget.css';



class ListWidget extends Component {


    render() {

        return (
            <Widget headline={this.props.headline} isLoading={this.props.isLoading} listData={this.props.data} colspan={this.props.colspan} rowspan={this.props.rowspan} />
        )

    }

}


export default ListWidget;