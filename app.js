// const fs = require('fs');
const fs = require('fs-extra');
const yaml = require('js-yaml');
const path = require('path');
const resolve = require('path').resolve;
const merge = require('@alexlafroscia/yaml-merge');

function addMultipleYamlFileIntoSingleYamlFile(nameOfDir) {
    //joining path of directory 
    const directoryPath = path.join(__dirname, nameOfDir);

    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            const output = merge(resolve(directoryPath + "/" + file));
         fs.appendFileSync('data-out1.yaml', output)

        });
    });
}
addMultipleYamlFileIntoSingleYamlFile('events')