//VIEJA FORMA DE IMPORTAR PAQUETES
//const express = require('express')
//FORMA MODERNA DE IMPORTAR PAQUETES: 
import express from 'express'

//funcionalidad generica de express
const app = express()//express es una funcion, se almacena en la variable app 

//CODIFICANDO LOS SERVICIOS
app.get('/comfama/api/v1', function (req, res) { //tiene el metodo get , se configura un api:servidor, lo primero que debe hacer es poder recibir la peticion
 //Uri '/' pa donde voy y hacer que: endpoint
     res.send('Hello World')//req, res:Servicio se atiende el endpoint, y luego se responde
})

//LEVANTAR EL SERVIDOR/ABRIR EL RESTAURANTE
app.listen(3000)