const Async = require("async");

function hello(callback) {
    setTimeout(function () {
        console.log("Hello");
        callback();
    },5000)
}
function world(callback) {
    setTimeout(function () {
        console.log("World");
        callback();
    },1000)
}
function foo(callback) {
    setTimeout( () =>  {
        console.log("Foo");
        callback();
    },7000)
}
function bar() {
    setTimeout(function () {
        console.log("Bar");

    },2000)
}

Async.series([world, hello, foo], bar);