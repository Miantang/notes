var fs = require("fs");
var path = require("path");

var pathDir = process.argv[2];
var ext = process.argv[3];

fs.readdir(pathDir, function(err, list) {
    var listLength = list.length;
    for (var i = 0; i < listLength; i++) {
        if (path.extname(list[i]) === "."+ext ) {
            console.log(list[i]);
        } else {

        }
    };
});

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//  list.forEach(function (file) {
//    if (path.extname(file) === '.' + process.argv[3])
//      console.log(file)
//  })
// })