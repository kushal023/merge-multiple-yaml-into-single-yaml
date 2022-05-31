const fs = require("fs");
const listOfFiles = [{fileName:"a.txt",data:"dummy data!"},{fileName:"b.txt",data:"dummy data b!"},{fileName:"c.txt",data:"dummy data c!"},{fileName:"d.txt",data:"dummy data d!"},{fileName:"e.txt",data:"dummy data e!"}];

listOfFiles.reduce(function(curFile, nextFile){
        return writeData(nextFile).then();
}, writeData);



function writeData(params){
  return new Promise((resolve,reject)=>{
    fs.writeFile(params.fileName,params.data,'utf8',(err)=>{
       if(err)
          reject(err);
       else
          resolve();
      });
 });
}
