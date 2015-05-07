var fs = require('fs');
var fileName = 'package.json';

console.log('reading \''+ fileName+'\' in sync mode');
var contents = fs.readFileSync(fileName).toString();
console.log(contents);

console.log('reading \'' + fileName + '\' in async mode');
fs.readFile(fileName,
    function (err, data)
    {
        if (err)
            throw err;
        console.log(data.toString());
    }
);