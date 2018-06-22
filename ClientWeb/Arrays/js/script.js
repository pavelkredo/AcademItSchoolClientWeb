var list = [5, 8, 10, 32, 1, 84, 42, 14, 7, 74, 47, 24, 15, 9];

list.sort(function (e1, e2) {
    return e2 - e1;
});

console.log(list);

var list1 = list.slice(0, 5);
var list2 = list.slice(list.length - 5);

console.log(list1);
console.log(list2);

var filteredList = list.filter(function (e) {
    return e % 2 === 0;
});

var result = filteredList.reduce(function(sum, current) {
    return sum + current;
});

console.log(result);

var hundredList = [];

for (var i = 1; i <= 100; i++) {
    hundredList.push(i);
}

var evenNumbers = hundredList.filter(function (e) {
    return e % 2 === 0;
});

var squaresOfNumbers = evenNumbers.map(function(num) {
    return Math.pow(num, 2);
});

console.log(squaresOfNumbers);