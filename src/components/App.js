import React, { Component } from 'react';
import NumberWidget from './NumberWidget';
import ListWidget from './ListWidget';
import GraphWidget from './GraphWidget';
import BarWidget from './BarWidget';

/* Data Fetching */
// import FetchData from '../utils/FetchData';
import GetNumberData from '../utils/GetNumberData';
import GetListData from '../utils/GetListData';
import GetGraphData from '../utils/GetGraphData';
import GetBarData from '../utils/GetBarData';
import '../assets/css/App.css';



class App extends Component {

  render() {


    return (
      <div className="App">
        <ListWidget headline={'Registered Funds'} data={GetListData('fund_name')} rowspan={2} />
        <BarWidget headline={'Types Per Segment'} data={GetBarData(['fund_name', 'subfund_name', 'share_class_name', 'date', 'nb_alerts'])} colspan={3} rowspan={2} />
        <NumberWidget headline={'Total Fund Types'} data={GetNumberData('fund_name')} />
        <NumberWidget headline={'Report Period in Days'} data={GetNumberData('date')} />
        <NumberWidget headline={'Total Sub Class Types'} data={GetNumberData('share_class_name')} />
        <NumberWidget headline={'Total Alert Types'} data={GetNumberData('nb_alerts')} />
        <GraphWidget headline={'Total Entry per Type'} data={GetGraphData(['fund_name', 'subfund_name', 'share_class_name'])} colspan={4} rowspan={1} />
        <NumberWidget headline={'Total Sub Funds'} data={GetNumberData('subfund_name')} />
        <ListWidget headline={'Registered Sub Funds'} data={GetListData('subfund_name')} rowspan={2} />
        <ListWidget headline={'Registered Share Classes'} data={GetListData('share_class_name')} rowspan={2} />
        <ListWidget headline={'Registered Dates'} data={GetListData('date')} rowspan={2} />
        <ListWidget headline={'Report Status'} data={GetListData('report_status')} />
      </div>
    );

  }
}

export default App;
