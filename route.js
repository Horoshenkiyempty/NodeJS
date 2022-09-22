function route(pathname) {
    console.log("About to route a request for" + pathname);
    if (typeof hadnle[pathname] === 'function') {
        hadnle[pathname](response);        
    }else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
    }
}
exports.pathname = pathname;