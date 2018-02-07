const async = require("async");
function HelloWorldOne(callback) {
    setTimeout(function () {
        console.log("HelloWorld - One");
        callback();
    }, Math.floor(Math.random()*10000));
}

function HelloWorldTwo(callback) {
    setTimeout(function () {
        console.log("HelloWorld - Two");
        callback();
    }, Math.floor(Math.random()*10000));
}

function HelloWorldThree(callback) {
    setTimeout(function () {
        console.log("HelloWorld - Three");
        callback();
    }, Math.floor(Math.random()*10000));
}

async.series([HelloWorldOne, HelloWorldTwo, HelloWorldThree], function () {
   console.log("Finish");
});