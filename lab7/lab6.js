"use strict";
window.onload =  function() {
    "the anser is" + main();
    a = [1, 2, 3];
    b = "dog";
    e = [...a, ...b]
    console.log(e)

}

var x = 10;
function main() {
    console.log("x1 is:" + x);
    x = 20;
    console.log("x2 is:" + x);
    if (x > 0) {
        var x = 30;
        console.log("x3 is:" + x);
    }
    console.log("x4 is:" + x);
    var x = 40;
    var f = function(x) {
        console.log("x5 is:" + x);
    };
    f(50);
    console.log("x6 is:" + x);
}
//main();
console.log("x7 is:" + x);

function sum(x, y, ...more) {

}

(function() {}())

(function () {
    var p = 9;
})()

const a = {

};


console.log(a.__Proto__)
