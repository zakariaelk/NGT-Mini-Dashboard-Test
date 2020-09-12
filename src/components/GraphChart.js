import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
// import '../assets/css/GraphChart.css';




class GraphChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            labels: ['Funds', 'Share Classes', 'Sub Funds'],
            datasets: [
                {
                    label: `Total Per Entry Type`,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: this.props.graphData
                }
            ]
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.graphData
        })
    }

    render() {

        return (

            <Bar
                data={this.state}
                options={{
                    title: {
                        display: true,
                        text: 'Number of Entries for Funds, Share Classes, SubFunds',
                        fontSize: 20
                    },
                    legend: {
                        display: false,
                        position: 'left'
                    }
                }}
            />
        )
    }

}

export default GraphChart;





