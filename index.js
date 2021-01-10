module.exports = class  {
    constructor(indexData) {
        (!Array.isArray(indexData) || indexData.length <= 0) && new Error('please fill in one entry with the format {year: 2010, rates: 100}');
        this.data = indexData.map((data) =>  {
            data.average = (Array.isArray(data.rates)) ?  data.rates.reduce((a, b) => a + b, 0) / data.rates.length : data.rates;
            return data;
        });
        this.average = this.data.reduce((a, b) => a + b.average, 0) / this.data.length;
    }
    calculate(amount, year = new Date().getFullYear()+1, fromYear = new Date().getFullYear()) {
        const average = this.average;
        const data = this.data;
        const yearDiffrences = new Array(Math.abs(year - fromYear)).fill().map((_, idx) => fromYear + idx);
        return {
            years: yearDiffrences.length, 
            results: yearDiffrences.reduce((o, y) =>  {
                const sum = (data.filter(e => e.year === y).length > 0) ? o.total *  (data.filter(e => e.year === y)[0].average/100) : o.total *  (average/100);
                o.total = sum;
                o.yearlyTotals.push({year: y, total: o.total});
                return o;
            }, {total: amount, yearlyTotals: []})
        }
    }
}