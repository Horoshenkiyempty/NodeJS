function route (pathname) {
    console.log("About to route a request for" + pathname);
    if(typeof handle[pathname] === 'function') {
        handle[pathname];
    } else {
        console.log("No request hanler found for " + pathname);
    }
}
exports.pathname = pathname;