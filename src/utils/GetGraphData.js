import data from '../assets/data/fund_data.json';

let registeredSegmentCount = null;

export default function GetGraphData() {
    const extractedData = Object.keys(data[0])
        .filter(entry => {
            return entry !== 'index'
                && entry !== 'fund_id'
                && entry !== 'date'
                && entry !== 'report_status'
                && entry !== 'nb_alerts'
                && entry !== 'share_class_id'
                && entry !== 'subfund_id'
        }).map(entry => {

            const dataObj = data.map(fund => fund[entry]).reduce(function (obj, item) {
                if (!obj[item]) {
                    obj[item] = 0;
                }
                obj[item]++;

                return obj;
            }, {});

            registeredSegmentCount = Object.values(dataObj);
            console.log(registeredSegmentCount);
            return registeredSegmentCount[0];

        })

    return extractedData;
}