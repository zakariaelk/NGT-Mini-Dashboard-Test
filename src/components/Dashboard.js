import React, { Component } from 'react';
import NumberWidget from './NumberWidget';
import ListWidget from './ListWidget';
import GraphWidget from './GraphWidget';
import BarWidget from './BarWidget';

/* Data Queries */
import GetNumberData from '../utils/GetNumberData';
import GetListData from '../utils/GetListData';
import GetGraphData from '../utils/GetGraphData';
import GetBarData from '../utils/GetBarData';

/* Styles */
import '../assets/css/App.css';


let renderedContent = null;
let loading = null;
let fundData = null;

class Dashboard extends Component {

  render() {

    fundData = this.props.data;
    loading = this.props.loading;

    if (fundData !== null) {

      renderedContent =
        <div className="App">
          <ListWidget headline={'Registered Funds'} data={GetListData(fundData, 'fund_name')} isLoading={loading} rowspan={2} />
          {/* <BarWidget headline={'Types Per Segment'} data={GetBarData(fundData, ['fund_name', 'subfund_name', 'share_class_name', 'date', 'nb_alerts'])} isLoading={loading} colspan={3} rowspan={2} />
          <NumberWidget headline={'Total Fund Types'} data={GetNumberData(fundData, 'fund_name')} isLoading={loading} />
          <NumberWidget headline={'Report Period in Days'} data={GetNumberData(fundData, 'date')} isLoading={loading} />
          <NumberWidget headline={'Total Sub Class Types'} data={GetNumberData(fundData, 'share_class_name')} isLoading={loading} />
          <NumberWidget headline={'Total Entries'} data={GetNumberData(fundData, 'index')} isLoading={loading} />
          <ListWidget headline={'Registered Sub Funds'} data={GetListData(fundData, 'subfund_name')} isLoading={loading} rowspan={2} />
          <GraphWidget headline={'Total Entry per Type'} data={GetGraphData(fundData, ['fund_name', 'subfund_name', 'share_class_name'])} isLoading={loading} colspan={3} rowspan={1} />
          <NumberWidget headline={'Total Sub Funds'} data={GetNumberData(fundData, 'subfund_name')} isLoading={loading} />
          <ListWidget headline={'Registered Share Classes'} data={GetListData(fundData, 'share_class_name')} isLoading={loading} rowspan={2} />
          <ListWidget headline={'Registered Dates'} data={GetListData(fundData, 'date')} isLoading={loading} />
          <ListWidget headline={'Report Status'} data={GetListData(fundData, 'report_status')} isLoading={loading} />
          <NumberWidget headline={'Total Alert Types'} data={GetNumberData(fundData, 'nb_alerts')} isLoading={loading} /> */}
        </div>;
    } else {
      renderedContent =
        <div className="App">
          <ListWidget headline={'Registered Funds'} data={[]} isLoading={loading} rowspan={2} />
          {/* <BarWidget headline={'Types Per Segment'} isLoading={loading} colspan={3} rowspan={2} />
          <NumberWidget headline={'Total Fund Types'} data={[]} isLoading={loading} />
          <NumberWidget headline={'Report Period in Days'} data={[]} isLoading={loading} />
          <NumberWidget headline={'Total Sub Class Types'} data={[]} isLoading={loading} />
          <NumberWidget headline={'Total Entries'} data={[]} isLoading={loading} />
          <ListWidget headline={'Registered Sub Funds'} data={[]} isLoading={loading} rowspan={2} />
          <GraphWidget headline={'Total Entry per Type'} isLoading={loading} colspan={3} rowspan={1} />
          <NumberWidget headline={'Total Sub Funds'} data={[]} isLoading={loading} />
          <ListWidget headline={'Registered Share Classes'} data={[]} isLoading={loading} rowspan={2} />
          <ListWidget headline={'Registered Dates'} data={[]} isLoading={loading} />
          <ListWidget headline={'Report Status'} data={[]} isLoading={loading} />
          <NumberWidget headline={'Total Alert Types'} data={[]} isLoading={loading} /> */}
        </div>
    }

    return renderedContent;

  }
}

export default Dashboard;
