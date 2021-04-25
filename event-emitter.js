const Eventemitter = require('events');

const customEmitter = new Eventemitter()

customEmitter.on('r', ()=>{
    console.log("Event occured");
})



customEmitter.emit('r')