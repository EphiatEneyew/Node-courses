const fs = require('fs');
const server = require('http').createServer();

//solution 1
server.on('request', (req, res) =>{
  //  fs.readFile('test-file.txt', (err, data) =>{
    //       if(err) console.log(err);
      //     res.end(data);
    //});
//});

//const readable = fs.createReadStream('test-filet.txt');
//readable.on('data', chunk => {
  //  res.write(chunk);
//});
//readable.on('end', () => {
  //  res.end();
//});
//readable.on('error', err => {
  //  console.log(err);
    //res.statusCode = 500;
    //res.end('File is not found');
//})

//solution 3 
const readable = fs.createReadStream("test-file.txt");
readable.pipe(res);
  //readableSource.pipe(writeableDest)
});
server.listen('8000', '127.0.0.1', () => {
    console.log('Listning...');
});