import data from '../assets/data/fund_data.json';

let filteredData = []

export default function GetBarData(dataType) {
    const extractedData = dataType.map(entry => {

        const dataObj = data.map(fund => fund[entry]).reduce(function (obj, item) {
            if (!obj[item]) {
                obj[item] = 0;
            }
            obj[item]++;

            return obj;
        }, {});

        const propLength = Object.keys(dataObj).length;
        const propValue = entry;
        console.log(propLength);
        return propLength;
    })


    filteredData = [...extractedData];
    return filteredData;

}