const fs = require('fs')
function catFunc(fileName){
  // process.stdout.write(fileName);
  // const fileContent = fs.filehandle.readFile(fileName);
  // process.stdout.write(fileContent);
  // process.stdout.write('\nprompt > ')

  fs.readFile(fileName, 'utf8', (err, data) => {
    if(err){
      throw err;
    }
    else{
      process.stdout.write(data)
      process.stdout.write("prompt > ")
    }
  });
}

module.exports = catFunc;
