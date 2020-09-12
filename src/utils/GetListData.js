import data from '../assets/data/fund_data.json';

export default function GetListData(dataType) {
    const extractedData = Object.keys(data[0])
        .filter(entry => {
            return entry === dataType
        }).map(entry => {

            const dataObj = data.map(fund => fund[entry]).reduce(function (obj, item) {
                if (!obj[item]) {
                    obj[item] = 0;
                }
                obj[item]++;

                return obj;
            }, {});

            // Now let's map over the different type of values inside of each prop inside our fund entries
            const countList = Object.entries(dataObj).map((row) => {
                const [prop, value] = row;
                // console.log(prop, value);
                return ([prop, value]);

            });

            return countList;

        })
    return extractedData;

}