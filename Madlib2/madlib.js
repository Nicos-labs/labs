//introduce/define arraY 
let inputs = [
];
//capture name input
inputs.push(prompt('Enter name'));
//capture adject input
inputs.push(prompt('Enter random adjectivce'));
//capture verb input
inputs.push(prompt('Enter random verb'));
//capture noun inputs
inputs.push(prompt('enter random singular noun'));
inputs.push(prompt('enter random plural noun'));
//capture Num inputs
inputs.push( prompt('enter Number from 1-5')); 
inputs.push(prompt('enter Number from 1-10'));
inputs.push( prompt('enter Number from 1-15'));
//object created
let planetJ = {
    name: 'Jupiter', 
    planetTyp: 'gas giant',
    majorMoons: ['Ganymede', 'Callisto', 'Io', 'Europa'], 
};

//Print the output to console
console.log(inputs[0] + ' and the '+ inputs[6] +' '+ inputs[3] +' '+ inputs[2] + ' the ' + inputs[1] +' '+ inputs[4] + ' at the ripe age of ' +inputs[7] + ' in the year ' + inputs[5] + ' on the second biggest moon on the planet '+ planetJ.name + ' . ' + planetJ.name + ' is a ' + planetJ.planetTyp + ' that has ' + planetJ.majorMoons.length + ' major moons. The second biggest is ' + planetJ.majorMoons[1] + '.' )

