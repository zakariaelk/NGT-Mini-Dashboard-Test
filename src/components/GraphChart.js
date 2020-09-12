import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import '../assets/css/GraphChart.css';




class GraphChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            labels: ['Total by Fund Name', 'Total by Sub Fund Name', 'Total by Share Classe Name'],
            datasets: [
                {
                    label: `Total Per Entry Type`,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
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
            <div className="GraphWrapper">
                <Bar
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'Number of Entries for Funds, Share Classes, SubFunds',
                            fontSize: 20,
                            fontColor: '#fff',
                            padding: 40
                        },
                        legend: {
                            display: false,
                            position: 'left'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: '#fff',
                                    fontSize: 14
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: '#fff',
                                    fontSize: 14
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }

}

export default GraphChart;





