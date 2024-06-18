//OPERACION ASINCRONICA:
//Una op asincronica es una operacion en un programa de computadora que no bloque la ejecucion del programa mientras espera su finalizacion. En lugar de detener la ejecucion y esperar
//que se complete la operacion, el programa continua ejecutandose y maneja la operacion mas adelante, generalmente mediante callbacks, promesas o async/await en lenguajes que admiten
//programacion asincrona.
//En el contexto de la programacion las op asincronicas son comunes en situaciones donde se pueden producir retrasos, como la lectura/escritura de archivos, solicitudes de red, consultas
// a base de datos, animaciones, temporizadores, entre otros.
//---------------------------------------------------------------------------------------------------------------------------------------

//Promesas: las promesas son obejtos en js que representan la eventual finalizacion o el fracaso de una op asincronica. las promesas son utilizadas para manejar op. asicronas de manera mas
// limpia y comprensible, evitando el uso excesivo de callback anidados. Una promesa puede estar en uno de los tres estados:
// Pendiente(pending): La op aun no se ha completado
// Resuelta(fulfilled): La op se completo con exito
// Rechazada(rejected): la op fallo

//El constructor promise toma una funcion que recibe dos funciones como argumentos: "resolve" para indicar exito y "rejected" para indicar fracaso
//Ejemplo basico de una promesa:
// const miPromesa = new Promise ((resolve,rejected) => {
//   //se hace un llamado a la Api 
//   const exito = true;
//   if(exito){
//     resolve('Operacion Exitosa')
//   } else {
//     rejected('Operacion Fallida')
//   }
// })
// //uso de la promesa
// miPromesa
//   .then((resultado) => {console.log(resultado)})
//   // .catch((rechazo) => {console.error(rechazo)})

//---------------------------------------------------------------------------------------------------------------------------------------
//Las Peticiones HTTP: Son el metodo principal para la comunicacion entre clientes (como navegadores web) y servidores en la world wide web (www). Estas solicitudes se utilizan para para enviar y
// recibir datos a traves de la red, permitiendo la transferencia de datos entre el cliente y el servidor.
// Existen varios tipos de solicitudes HTTP, siendo las mas comunes
// GET: Solicita datos de un recurso especifico. Los parametros pueden ser incluidos en la URL
// POST: Envia datos al servidor para ser procesados. Los datos se envian en el cuerpo de la solicitud
// PUT: Actualiza un recurso en el servidor con los datos proporcionados. Similar a POST, pero se utiliza para actualizar en vez de crear
// DELETE: Elimina un recurso del servidor

//---------------------------------------------------------------------------------------------------------------------------------------
//FETCH: Es una funcion incorporada en los navegadores modernos que se utiliza para realizar solicitudes de red. Fetch devuelve una promesa que se resuelve con el objeto 
//Response que representa la respuesta a la solicitud
//fetch recibe como argumento una URL de una API