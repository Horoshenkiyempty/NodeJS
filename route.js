function route (pathname) {
    console.log("About to route a request for" + pathname);
    if(typeof handle[pathname] === 'function') {
       return handle[pathname]();
    } else {
        console.log("No request hanler found for " + pathname);
        return "404 not found";
    }
}
exports.pathname = pathname;