
window.onload =  function() {

    console.log(" >>> The maximum between the two numbers is: ", max(23, 78));
    console.log(" >>> The maximum between the three numbers is: ", maxOfThree(23, 78, 90));
    console.log(" >>> is a vowel? ",  isVowel("A"));
    console.log(" >>> The sum of the array is ",  sum([1, 2, 3, 4]));
    console.log(" >>> The reversed string Chinedu is  ",  reverse("Chinedu"));

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
    return  arr.reduce((previousValue, currentValue, currentIndex) => previousValue + currentValue);
}

function sum(arr = []) {
    return  arr.reduce((previousValue, currentValue, currentIndex) => previousValue * currentValue);
}

function reverse(str) {
    if(str.length == 0 || str.length == "") {
        return str;
    }
    return  reverse(str.substring(1)) + str.charAt(0);
}