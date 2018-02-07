const async = require("async");

function Hello(callback) {
    setTimeout(function () {
        console.log("Hello");
        callback();
    },1000)
}
function World(callback) {
    setTimeout(function () {
        console.log("World");
        callback();
    },5000)
}
function Foo(callback) {
    setTimeout(function () {
        console.log("Foo");
        callback();
    },2000)
}
async.series([World, Hello, Foo], function () {
    console.log("Bar");
});