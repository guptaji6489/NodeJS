var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var myHandler = function()
{
    console.log("Event 1");
    eventEmitter.emit('event2');
    
}

var myHandler2 = function()
{
    console.log("Event 2");
}

eventEmitter.on('event3',function(){
    console.log("Event 3");
});

var myHandler4 = function(msg)
{
    console.log("Event 4 " + msg);
}

eventEmitter.on('event1',myHandler);
eventEmitter.on('event2',myHandler2);
eventEmitter.on('event4',myHandler4);


eventEmitter.emit('event1');
eventEmitter.emit('event3');
eventEmitter.emit('event4','hello harshitjii');