import React, { Component } from 'react';
import ListItem from './ListItem';
import '../assets/css/ListDisplay.css';

let fundNameValue = null;
let fundListItems = null;
let fundSingleItem = null;
let fundCountValue = null;

class ListDisplay extends Component {
    render() {

        const fundData = this.props.fundData;
        return (

            <ul className="ListDisplay">

                {
                    fundListItems = fundData.map(fundArray => {
                        fundSingleItem = fundArray.map(fundValue => {
                            [fundNameValue, fundCountValue] = fundValue;
                            return <ListItem key={fundArray.indexOf(fundValue)} listValue={fundNameValue} />

                        })

                        return (
                            <div key={fundData.indexOf(fundCountValue)}>
                                {/* <h3>Total Entries {fundCountValue}</h3> */}
                                {fundSingleItem}
                            </div>
                        );

                    })

                }

            </ul>
        )
    }
}


export default ListDisplay;