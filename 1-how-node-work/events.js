const EventEmitter = require('events');// load the built in node events
const http = require('http');


class Sales extends EventEmitter {
    constructor() {
        super();//when this line run we can access or get the behaviour of parent(EventEmitter) classes like listner and emmiter
    }
}
const myEmitter = new Sales();// to create our new events and to set it with a function.it inherti event emiter and listner behavior of node EventEmmiter.


myEmitter.on('newSale', () => {
    console.log('There was a new sale!');
});

myEmitter.on('newSale', () => {
    console.log('custumer name: Ephrem');
});

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stock.`);
});
myEmitter.emit('newSale', 9); // object which emit the event


//////////////////////////////////////////////

const server =http.createServer();

server.on('request', (req, res) => {
    console.log('request received!');
    console.log(req.url);
    res.end('Request received');
});

server.on('request', (req, res) => {
    console.log('Another request received!');
   
});

server.on('close', (req, res) => {
    console.log('server closed');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('waiting for requests...')
});
