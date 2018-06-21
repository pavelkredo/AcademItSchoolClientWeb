var list = [5, 8, 10, 32, 1, 84, 42, 14, 7, 74, 47, 24, 15, 9];

list.sort(function (e1, e2) {
    return e2 - e1;
});

alert(list);

var list1 = list.slice(0, 5);
var list2 = list.slice(list.length - 5, list.length);

alert(list1);
alert(list2);

var filteredList = list.filter(function (e) {
    return e % 2 === 0;
});

var sum = 0;

for (var i = 0; i < filteredList.length; i++) {
    sum += filteredList[i];
}

alert(sum);

var hundredList = [];

for (var i = 1; i <= 100; i++) {
    hundredList.push(i);
}

var evenNumbers = hundredList.filter(function (e) {
    return e % 2 === 0;
});

var squaresOfNumbers = [];

for (var i = 0; i < evenNumbers.length; i++) {
    squaresOfNumbers.push(Math.pow(evenNumbers[i], 2));
}

alert(squaresOfNumbers);