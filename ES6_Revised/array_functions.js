
const numbers = [1,2,3,4,5,6,7];
const doubled_array = numbers.map((num) => {
    return 2*num;
})

const found = numbers.find((element) => {
return element > 6 // return the 1st element in the array which is greater than 6
})

//console.log(found);

const greater_than_6_index = numbers.findIndex((element) => {
    return element > 6 // return the index of the 1st element > 6
})

// console.log(greater_than_6_index); should return 6

const filtered_array = numbers.filter((element) => {
    return (element % 2) === 0
})

// console.log(filtered_array); // outputs a filtered array consisting of all multiples of 2

const reduced = numbers.reduce((acc,start = 0) => {
    return acc + start;
})

//console.log(reduced); should output the sum of all numbers in numbers array

const numbers_2 = [8,9,10,11,12];

const new_array = numbers.concat(numbers_2);
console.log(new_array);