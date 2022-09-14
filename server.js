/*var http = require("http");

function start() {                                                       //Инициалзации модуля
    function onRequest(request, response) {
	    console.log("Request received."); 				                //Вывод в консоль сообщения
	    response.writeHead(200, {"Content-Type": "text/pain"});		    //Заголовок ответа на запрос
	    response.write("Hello World");				                    //Запрос на вывод сообщения
	    response.end();						                            //Конец запроса
    }

    http.createServer(onRequest).listen(8888);                          //CallBack на запуск сервера
    console.log("Server has started.");  				
}
    exports.start = start;                                              //Команда вызова вункции
*/

var http = require("http");
var url = require("url");

function start(pathname, handle) {                                              //Инициалзации модуля
    function onRequest(request, response) {
        var pathname = url.parse (request.url).pathname;
	        console.log("Request for" + pathname + " received.");       //Вывод в консоль сообщения
	        response.writeHead(200, {"Content-Type": "text/pain"});		//Заголовок ответа на запрос

            route(handle, pathname);                                            //Вызов функции route

	        response.write("Hello World");				                //Запрос на вывод сообщения
	        response.end();						                        //Конец запроса
    }

    http.createServer(onRequest).listen(8888);                          //CallBack на запуск сервера
    console.log("Server has started.");  				
}
    exports.start = start;                                              //Команда вызова вункции

