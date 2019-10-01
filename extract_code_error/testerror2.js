var fs = require('fs'),
    path = require('path');

fs.readFile('errorlog1.txt', 'utf8', function (err, data) {
    // console.log(err);
    var stringdata = "" + data;
    var line_array = stringdata.split("\n");
    var colon_array = line_array[4].split(":");

    var sorted_err_arr = colon_array[1];
    console.log(sorted_err_arr);

    socket.emit("event", {
        error: sorted_err_arr
    })


})

var socket = require('socket.io-client')('http://localhost:4001');
socket.on('connect', function () { console.log("connected") });
socket.on('event', function (sorted_err_arr) {
    console.log(sorted_err_arr);
});

socket.on('disconnect', function () { });

