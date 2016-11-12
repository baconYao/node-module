// process.chdir()更改目前路徑

console.log('Current directory: ' + process.cwd());
console.log('Current directory to: C:\Program Files' + process.chdir('C:\Program Files'));
console.log('Current directory: ' + process.cwd());
