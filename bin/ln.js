#!/usr/bin/env node

var fs = require('fs');

if (process.argv[2] != "-s") return process.exit(-1);

var from = process.argv[3];
var dest = process.argv[4];

fs.symlinkSync(from,dest);
