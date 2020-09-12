import data from '../assets/data/fund_data.json';

let filteredData = []

export default function GetNumberData(dataType) {
    const extractedData = Object.keys(data[0])
        .filter(entry => {
            return entry === dataType
        })
        .map(entry => {

            const dataObj = data.map(fund => fund[entry]).reduce(function (obj, item) {
                if (!obj[item]) {
                    obj[item] = 0;
                }
                obj[item]++;

                return obj;
            }, {});

            const propLength = Object.keys(dataObj).length;
            const propValue = entry;

            return [propValue, propLength];
        })


    filteredData = [...extractedData];

    return filteredData;

}