import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import '../assets/css/GraphChart.css';




class BarChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            labels: ['Fund Names', 'Sub Fund Names', 'Share Classes', 'Data Report Duration', 'Alert Types'],
            datasets: [
                {
                    label: `Types Per Segment`,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2,
                    data: this.props.barData
                }
            ]
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.barData
        })
    }

    render() {

        return (
            <div className="GraphWrapper">
                <HorizontalBar
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'Number of Segment Categories',
                            fontSize: 20,
                            fontColor: '#fff'
                        },
                        legend: {
                            display: false,
                            position: 'left'
                        },
                        scales: {
                            xAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: '#fff',
                                    fontSize: 14
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    fontColor: '#fff',
                                    fontSize: 14
                                },
                            }]

                        }
                    }}
                />
            </div>
        )
    }

}

export default BarChart;





