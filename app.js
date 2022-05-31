// const fs = require('fs');
const fs = require('fs-extra');
const path = require('path');

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

            const data = fs.readFileSync(directoryPath+'/'+file,
              {encoding:'utf8', flag:'r'});
        
            fs.appendFileSync('data-out1.yaml', data)

        });
    });
}
addMultipleYamlFileIntoSingleYamlFile('events')