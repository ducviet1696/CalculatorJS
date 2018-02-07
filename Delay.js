const async = require("async");

function Hello(ck) {
    setTimeout(function () {
        console.log("Hello");
        ck();
    },5000)
}
function World(callback) {
    setTimeout(function () {
        console.log("World");
        callback();
    },1000)
}
function Foo(callback) {
    setTimeout(function () {
        console.log("Foo");
        callback();
    },7000)
}
function Bar() {
    setTimeout(function () {
        console.log("Bar");

    },2000)
}
async.series([World, Hello, Foo], Bar);