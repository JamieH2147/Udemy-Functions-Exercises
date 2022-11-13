
//UDEMY CHALLENGES

/* 
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console */


function describeCountry(country, population, capitalCity) {

  const countryDescription = `${country} has ${population} million people, and its capital city is ${capitalCity}`;
  return countryDescription;

}

const englandDescription = describeCountry('England', 53, 'London');
const franceDescription = describeCountry('France', 67, 'Paris');
const spainDescription = describeCountry('Spain', 47, 'madrid' );

console.log(englandDescription);
console.log(franceDescription);
console.log(spainDescription);


/*
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population

2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100

3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console

4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations) */


function percentageOfWorld1(population) {

  const percentageOfWorld =((population / 7900) * 100).toFixed(2);
  return percentageOfWorld;

}

let englandWorldPercentage = percentageOfWorld1(53);
let franceWorldPercentage = percentageOfWorld1(67);
let spainWorldPercentage = percentageOfWorld1(47);

console.log(englandWorldPercentage, franceWorldPercentage, spainWorldPercentage);



const percentageOfWorld2 = function(population) {

  const percentageOfWorld1 =((population / 7900) * 100).toFixed(2);
  return percentageOfWorld1;

}

englandWorldPercentage = percentageOfWorld2(53);
franceWorldPercentage = percentageOfWorld2(67);
spainWorldPercentage = percentageOfWorld2(47);

console.log(englandWorldPercentage, franceWorldPercentage, spainWorldPercentage);


/*
 1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3'*/

const percentageOfWorld3 = (population) => {

  const percentageOfWorldArrow =((population / 7900) * 100).toFixed(2);
  return percentageOfWorldArrow;

}

englandWorldPercentage = percentageOfWorld3(53);
franceWorldPercentage = percentageOfWorld3(67);
spainWorldPercentage = percentageOfWorld3(47);

console.log(englandWorldPercentage, franceWorldPercentage, spainWorldPercentage);


/*
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'

2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier

3. Call 'describePopulation' with data for 3 countries of your choice*/

const describePopulation = (country, population) => {

  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
  return description;

}

console.log(describePopulation(`England`, 53));
console.log(describePopulation('France', 67));
console.log(describePopulation('Spain', 47));






