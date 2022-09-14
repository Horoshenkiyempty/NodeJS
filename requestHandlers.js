function start(){
    console.log("Request handler 'start' was called.");

    function sleep (MilliSeconds) {
        var StartTime = new Date().getTime();
        while (new Date().getTime() < StartTime + MilliSeconds);
    }
    sleep(10000)
    return "Hello Start!"
}


function upload(){
    console.log("Request handler 'upload' was called.");
    return "Hello Update!"
}

exports.start = start;
exports.upload = upload;