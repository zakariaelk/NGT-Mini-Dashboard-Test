// import data from '../assets/data/fund_data.json';
import '../assets/css/GraphChart.css';

let registeredSegmentCount = null;

export default function GetGraphData(data, selectedData) {
    const extractedData = selectedData.map(entry => {

        const dataObj = data.map(fund => fund[entry]).reduce(function (obj, item) {
            if (!obj[item]) {
                obj[item] = 0;
            }
            obj[item]++;

            return obj;
        }, {});

        registeredSegmentCount = Object.values(dataObj);
        // console.log(registeredSegmentCount[0]);
        return registeredSegmentCount[0];

    })

    return extractedData;
}