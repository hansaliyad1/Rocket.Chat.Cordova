#!/usr/bin/env node

var execSync = require('child_process').execSync;
var fs = require('fs');

var coffee_path = 'www/coffee/'

if( !fs.existsSync(coffee_path)) {
    fs.mkdirSync(coffee_path)
}

execSync("rm -rf www/js_compiled/*")
execSync("coffee --compile --output www/js_compiled/ " + coffee_path)
