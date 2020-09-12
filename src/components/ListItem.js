import React, { Component } from 'react';

import '../assets/css/ListItem.css';


export default class ListItem extends Component {
    render() {
        return (
            <li className="ListItem">
                <div className="label">
                    {this.props.listValue}
                </div>
            </li>
        )
    }
}

