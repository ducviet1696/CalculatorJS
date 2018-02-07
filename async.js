const async = require("async");
function HelloWorldOne(callback) {
    setTimeout(function () {
        console.log("HelloWorld - One");
        callback();
    }, 5000);
}

function HelloWorldTwo(callback) {
    setTimeout(function () {
        console.log("HelloWorld - Two");
        callback();
    }, 10000);
}

function HelloWorldThree() {
    setTimeout(function () {
        console.log("HelloWorld - Three");
    }, 2000);
}
async.series([HelloWorldOne, HelloWorldTwo], HelloWorldThree);