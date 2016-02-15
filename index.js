var express = require('express');

	var index = express();
		index.set("view engine", "jade");/*Le decimos que las vistas seran por JADE*/
		index.use(express.static("public"));/*Creamos carpeta estatica para elementos como imagenes, css & js*/

		index.get("/",function(solicitud, respuesta){
			respuesta.render("index.jade");/*Se utiliza RENDER para renderiar las vistas*/
			/*respuesta.end("Hello world, NodeJs is here!, First page web html5 with ExpressJs"); No se utiliza esta respuesta de solo una cadena*/
		});

index.listen(8080);