import React, { Component } from 'react';

import '../assets/css/ListItem.css';


export default class ListItem extends Component {
    render() {
        return (
            <li className="ListItem">
                <div className="value">
                    {this.props.listValue}
                </div>
            </li>
        )
    }
}

