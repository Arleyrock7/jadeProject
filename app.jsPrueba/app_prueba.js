/*1. creamos una variable en este caso de nombre "express" para ingresar 
la info que expone el Framework sobre la creacion de un servidor*/
var express = require('express');
/*2. Declaramos nuestra varianle app*/
var app_prueba = express();
/*3. Hacemos el request de la petición de la url "/"*/
	app_prueba.get("/", function(solicitud,respuesta){ /*req = SOLICITUD,res=RESPUESTA*/
		/*3. Ingresamos la respuesta que nos pide el request para escuchar el puerto :8080*/
	   /*respuesta.send("Hello NodeJs is here! Respuesta con SEND");*/
		 respuesta.end("Hello NodeJs is here! Respuesta con END");
}); 
/*NOTA: El metodo get es un verbo de HTTP, protocolo por el cual se comunica la internet
		Tiene dos metodos muy populares: POST & GET
		POST: Generlamente para formularios
		GET: Generalmente para URLS
----------------------------------------------------------------------------------------
Con SEND le envamos info al servidor pero NO le decimos que terminamos
Caso contrario con END

*/	





/*5. Especificamos el puerto de escucha de nuestra app*/
app_prueba.listen(8080);
