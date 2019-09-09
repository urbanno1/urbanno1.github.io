
window.onload =  function() {

    console.log(" >>> The maximum between (23, 78) is: ", max(23, 78));
    console.log(" >>> The maximum between (23, 78, 90) is: ", maxOfThree(23, 78, 90));
    console.log(" >>> is 'A' a vowel? ",  isVowel("A"));
    //console.log(" >>> The sum of the array; [1, 2, 3, 4]  is ",  sum([1, 2, 3, 4]));
    console.log(" >>> Expected output of 'sum([1, 2, 3, 4])' is 10 and " + myFunctionTest(10, function () {return sum([1, 2, 3, 4]);}));
    console.log(" >>> The reverse of jag testar is  ",  reverse("jag testar"));
    console.log(" >>> The longest word in ['Breyonna', 'Surafel', 'Magnificent', 'Chinedu', 'Dawit'] is  ",  findLongestWord(['Breyonna', 'Surafel','Magnificent', 'Chinedu', 'Dawit']));
    console.log(" >>> The word in ['Breyyonna', 'Surafel', 'Magnifi', 'Chinedu', 'Dawit'] greater than 8 is  ",  filterLongWords(['Breyyonna', 'Surafel','Magnifi', 'Chinedu', 'Dawit'], 8));
    console.log(" >>> The multiplication of the array; [1,3,5,3,3] by 10 is ",  multiplyArrays([1,3,5,3,3]));
   // console.log(" >>> The filter of the array; [1,3,5,3,3] by value 3 is " + filterfor3([1,3,5,3,3]));
    console.log(" >>> Expected output of 'filterfor3([1,3,5,3,3])' is [3, 3, 3] and " + myFunctionTest([3,3,3], function () {return filterfor3([1,3,5,3,3]);}));
    console.log(" >>> The multiplication sum of the array; [1,3,5,3,3] is ",  productSum([1,3,5,3,3]));
}

function myFunctionTest(expected, f) {
    let result = f();
    console.assert( JSON.stringify(expected) == JSON.stringify(result), "Test Failed", result);

    if(JSON.stringify(expected) == JSON.stringify(result)) {
        return  "TEST SUCCEEDED";
    } else {
        return  "TEST FAILED";
    }

}



//get the maximum of the two numbers.
function max(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

//get a maximum number between three numbers
function maxOfThree(n1, n2, n3) {
    if(n1 > n2 && n1 > n3) {
        return n1;
    } else if(n2 > n1 && n2 > n3) {
        return n2;
    } else if(n3 > n1 && n3 > n2) {
        return  n3;
    } else {
        return "The numbers are all equal";
    }
}
//check if a character is a vowel.
function isVowel(strObj) {
    let str = strObj.toUpperCase();
    if(str === 'A' || str === 'E' || str === 'I' || str === 'O' || str === 'U') {
        return true;
    } else {
        return false;
    }
}

function sum(arr = []) {
    return  arr.reduce(function(previousValue, currentValue, currentIndex) { return  previousValue + currentValue;});
}

// function sum(arr = []) {
//     return  arr.reduce((previousValue, currentValue, currentIndex) => previousValue * currentValue);
// }

function reverse(str) {
    if(str.length == 0 || str.length == "") {
        return str;
    }
    return  reverse(str.substring(1)) + str.charAt(0);
}

function findLongestWord(arr = []) {
    return arr.reduce((previousValue, currentValue, currentIndex) => previousValue.length > currentValue.length ? previousValue : currentValue);
}

function  filterLongWords(arr = [], n1) {
    return arr.filter(elem => elem.length > n1);
}
//multiply each array with 10.
function multiplyArrays(arr = []) {
    return arr.map(function (elem, i, arr) {
        return elem * 10;
    });
}

function filterfor3(arr = []) {
    return arr.filter(function (elem, i, arr) {
        return elem === 3;
    });
}

function productSum(arr = []) {
    return arr.reduce(function (previousValue, currentValue, currentIndex) {
        return previousValue *= currentValue;
    })
}