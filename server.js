var http = require("http");
var url = require("url");

function start(pathname) {                                              //Инициалзации модуля
    function onRequest(request, response) {
        var pathname = url.parse (request.url).pathname;
	        console.log("Request for" + pathname + " received.");       //Вывод в консоль сообщения

            route(handle, pathname, response);                                            //Вызов функции route
    }

    http.createServer(onRequest).listen(8888);                          //CallBack на запуск сервера
    console.log("Server has started.");  				
}
    exports.start = start;                                              //Команда вызова вункции

