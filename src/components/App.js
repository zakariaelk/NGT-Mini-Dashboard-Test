import React, { Component } from 'react';
import NumberWidget from './NumberWidget';
import ListWidget from './ListWidget';
import GraphWidget from './GraphWidget';

/* Data Fetching */
// import FetchData from '../utils/FetchData';
import GetNumberData from '../utils/GetNumberData';
import GetListData from '../utils/GetListData';
import GetGraphData from '../utils/GetGraphData';
import '../assets/css/App.css';



class App extends Component {

  render() {


    return (
      <div className="App">
        <ListWidget headline={'Registered Funds'} data={GetListData('fund_name')} rowspan={2} />
        <GraphWidget headline={'Total Entry per Type'} data={GetGraphData()} colspan={3} rowspan={2} />
        <NumberWidget headline={'Total Fund Types'} data={GetNumberData('fund_name')} />
        <NumberWidget headline={'Total Sub Fund Types'} data={GetNumberData('subfund_name')} />
        <NumberWidget headline={'Total Sub Class Types'} data={GetNumberData('share_class_name')} />
        <NumberWidget headline={'Total Alert Types'} data={GetNumberData('nb_alerts')} />
        <NumberWidget headline={'Report Status'} data={GetNumberData('report_status')} />
        <NumberWidget headline={'Funds Entry Period in Days'} data={GetNumberData('date')} />
      </div>
    );

  }
}

export default App;
