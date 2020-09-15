let filteredData = []

export default function GetBarData(data, dataType) {
    const extractedData = dataType.map(entry => {

        const dataObj = data.map(fund => fund[entry]).reduce(function (obj, item) {
            if (!obj[item]) {
                obj[item] = 0;
            }
            obj[item]++;

            return obj;
        }, {});

        const propLength = Object.keys(dataObj).length;
        return propLength;
    })


    filteredData = [...extractedData];
    return filteredData;

}