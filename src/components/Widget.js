import React, { Component } from 'react';
import Loading from './Loading';
import NumberDisplay from './NumberDisplay';
import ListDisplay from './ListDisplay';
import GraphChart from './GraphChart';
import BarChart from './BarChart';
import '../assets/css/Widget.css';


class Widget extends Component {

    constructor(props) {
        super(props);

        // Create inline styles to make grid elements span multiple rows/columns
        this.spanStyles = {};
        this.isLoading = this.props.isLoading

        if (props.colspan && props.colspan !== 1) {
            this.spanStyles.gridColumn = `span ${ props.colspan }`;
        }
        if (props.rowspan && props.rowspan !== 1) {
            this.spanStyles.gridRow = `span ${ props.rowspan }`;
        }
    }

    render() {

        let widgetType = null;

        if (this.props.numberValue) {
            widgetType = <NumberDisplay value={this.props.numberValue} />
        }

        if (this.props.listData) {
            widgetType = <ListDisplay fundData={this.props.listData} />
        }

        if (this.props.graphData) {
            widgetType = <GraphChart headline={this.props.headline} graphData={this.props.graphData} />
        }

        if (this.props.barData) {
            widgetType = <BarChart headline={this.props.headline} barData={this.props.barData} />
        }

        return (
            <div style={this.spanStyles} className="Widget">
                <div className="header">
                    <h2>
                        {this.props.headline}
                    </h2>
                    {(this.props.isLoading === true) ? <Loading /> : ""}
                </div>
                <div className="content">
                    {widgetType}
                </div>
            </div>
        );
    }

}

export default Widget;