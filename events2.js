var EventEmitter = require("events").EventEmitter;

var ee = new EventEmitter();

ee.once("firstConnection", function(){ console.log('You will never see this again.')});
ee.emit("firstConnection");
ee.emit("firstConnection");
