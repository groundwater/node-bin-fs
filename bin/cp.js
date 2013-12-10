#!/usr/bin/env node

var fs = require('fs');

var from = process.argv[2];
var dest = process.argv[3];

fs.createReadStream(from).pipe( fs.createWriteStream(dest) );

