var server = require("./server");
var router = require("./route");
var requestHandlers = require("./requestHanlers");

var handle = {};
    handle["/"] = requestHandlers.start;
    handle["/start"] = requestHandlers.start;
    handle["/upload"] = requestHandlers.upload;
server.start(router.route, handle);