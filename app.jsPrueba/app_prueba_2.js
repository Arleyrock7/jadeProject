var express = require('express');
var mongoose = require('mongoose'); /*Driver para conectar las bases de datos Mongo y NodeJS*/

	var index = express();

/*-----------------------------------------------------------------------------------------------------------------------------BASE DE DATOS*/		
				mongoose.connect("mongodb://localhost/primera_pagina");/*Conectar al gestor de bases de datos MongoDB*/
					//Definir el schema de nuestros productos de la base de datos
					/*var productSchema = {
						title: String,
						description: String,
						imageUrl: String,
						pricing: Number
					};

					var Product = mongoose.model("Product", productSchema);	*/
/*-----------------------------------------------------------------------------------------------------------------------------END BASE DE DATOS*/

		index.set("view engine", "jade");/*Le decimos que las vistas seran por JADE*/
		index.use(express.static("public"));/*Creamos carpeta estatica para elementos como imagenes, css & js*/

		index.get("/",function(solicitud, respuesta){
/*-----------------------------------------------------------------------------------------------------------------------------BASE DE DATOS*/	
			/*var data = {
				title: "Mi primer súper producto",
				description: "Una mega super hiper compra",
				pricing: 10
			}

			var product = new Product(data);
				product.save(function(err){
					console.log(product);
				});*/
/*-----------------------------------------------------------------------------------------------------------------------------END BASE DE DATOS*/
			respuesta.render("index.jade");/*Se utiliza RENDER para renderiar las vistas*/
			/*respuesta.end("Hello world, NodeJs is here!, First page web html5 with ExpressJs"); No se utiliza esta respuesta de solo una cadena*/
		});

index.listen(8080);
