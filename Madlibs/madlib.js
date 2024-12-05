//introduce/define random to the 
let N = 100;
let random = Math.random() * N;

//capture name input
let urName = prompt('Enter name');
//capture adject input
let adj =  prompt('Enter random adjectivce');
//capture verb input
let verb =  prompt('Enter random verb');
//capture noun inputs
let noun2 = prompt('enter random singular noun')
let noun1 = prompt('enter random plural noun')
//capture Num inputs
let iNum1 = prompt('enter Number from 1-5'); 
let iNum2 = prompt('enter Number from 1-10');
let iNum3 = prompt('enter Number from 1-15');
//convert string to Numeric and then doing caculations
let num3 = Number(iNum3) + N
let num1 = Number(iNum1) + 1000 +(Math.floor(random - num3));
let num2 = Number(iNum2) + 100000 +(Math.floor(random));

//Print the output to console
console.log(urName + ' and the '+ num2 +' '+ noun1 +' '+ verb + ' the ' +adj +' '+ noun2 + ' at the ripe age of ' +num3 + ' in the year ' + num1);



