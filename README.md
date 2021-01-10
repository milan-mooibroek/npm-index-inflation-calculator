# String code from number generator

The index-inflation-calculator package is a tool to calculate upcomming year values of given purchase year and amount.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install index-inflation-calculator package.

```bash
npm index-inflation-calculator -s
```

## Usage

```javascript
const indexInflationCalculator = require('index-inflation-calculator');
const previousYearsData = [
    {year: 2010, rates: [107.2, 106.5, 106.5, 106.2]},
    {year: 2013, rates: [101]},  
];
const indexCalculator = new indexInflationCalculator(previousYearsData);
const returnOnBoughtHouse = indexCalculator.calculate(250000, 2025);
console.dir(returnOnBoughtHouse, { depth: null });
```

You can add an array or single value to split quarter results or yearly results in the rates value, Years must be unique.

## Examples
```javascript
const indexInflationCalculator = require('index-inflation-calculator');
const previousYearsData = [
    {year: 2010, rates: [107.2, 106.5, 106.5, 106.2]},
    {year: 2013, rates: [101]},  
];
const indexCalculator = new indexInflationCalculator(previousYearsData);
const returnOnBoughtHouse = indexCalculator.calculate(250000, 2025);
console.dir(returnOnBoughtHouse, { depth: null });
//This log will be : 
// {
//     years: 4,
//     results: {
//       total: 290221.393284,
//       yearlyTotals: [
//         { year: 2021, total: 259500 },
//         { year: 2022, total: 269361 },
//         { year: 2023, total: 279596.718 },
//         { year: 2024, total: 290221.393284 }
//       ]
//     }
//   }
```

## License
[MIT](https://choosealicense.com/licenses/mit/)