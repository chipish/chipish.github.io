
let tip= null;
let bill= null;
let totalValue= null;


const tipCalc = function (x){

    bill= x;
    (bill >= 30 && bill <= 300) ? tip= bill*.15 : tip= bill*.20;
    totalValue = tip + bill;
    return `The bill was ${bill}, the tip was ${Math.trunc(tip)}, and the total value is ${totalValue}`;
}

console.log(tipCalc(275));
console.log(tipCalc(28));
console.log(tipCalc(430));

console.log('\n \n');

const celsiusToFahrenheit = function(x){
    let celsius = x;
    let fahrenheit = celsius * (9/5)+32;
    return `${celsius}C is ${fahrenheit}F`;
}

const fahrenheitToCelsius = function(x){
    let fahrenheit = x;
    let celsius = (fahrenheit -32) * 5/9;
    return `${fahrenheit}C is ${Math.trunc(celsius)}F`;
}

console.log(celsiusToFahrenheit(30));
console.log(fahrenheitToCelsius(90));

console.log('\n \n');


const calcAverage = (x, y, z) => {
    return ((x+y+x)/3);
}

let netsAvg= calcAverage(44, 23, 71);
let knicksAvg= calcAverage(65, 54, 49);

const checkWinner = function (netsAvg, knicksAvg){

    if(netsAvg >= (2*knicksAvg) )
    console.log(`Nets win ${Math.trunc(netsAvg)} vs. ${Math.trunc(knicksAvg)}`);
    
    else if (knicksAvg >= (2*netsAvg) )
    console.log(`Nets win ${Math.trunc(knicksAvg)} vs. ${Math.trunc(netsAvg)}`);

    else{
        console.log('No team won!')
    }
}

checkWinner(netsAvg, knicksAvg);

netsAvg= calcAverage(85, 54, 41);
knicksAvg= calcAverage(23, 34, 27);

checkWinner(netsAvg, knicksAvg);


console.log('\n \n');


const calcTip = function (x){

    let tip = null;
    (x >= 30 && x <= 300) ? tip= x*.15 : tip= x*.20;
    return tip;
}

console.log(calcTip(100));

let bills = [125, 555, 44];
let tips = [calcTip(125), calcTip(555), calcTip(44)];

let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`Here are the bills ${bills} and corresponding tips ${tips}.\n The total values are ${total}`);