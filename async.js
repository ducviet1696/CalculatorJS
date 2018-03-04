const async = require("async");
function helloWorldOne(callback) {
    setTimeout( () =>
    {
        console.log("HelloWorld - One");
        callback();
    }, 5000);
}

function helloWorldTwo(callback) {
    setTimeout(function () {
        console.log("HelloWorld - Two");
        callback();
    }, 10000);
}

function helloWorldThree() {
    setTimeout(function () {
        console.log("HelloWorld - Three");
    }, 2000);
}
async.series([helloWorldOne, helloWorldTwo], helloWorldThree);