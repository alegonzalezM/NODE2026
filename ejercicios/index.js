// const argv= process.argv.slice(2);

// switch(argv[0]){
//     case 'GET':
//   console.log("GET");
//   console.log("TOMA UN DATO" )
//   break;

//     case 'POST':
//     console.log("POST");
//     if(argv[1]){
//         console.log(`Recibimos ${argv[1]} satisfactoriamente`)
//     }else{
//         console.log("Comando POST incompleto")
//     }
//     break;
     
//     case "PUT":
//     console.log( 'PUT');
//     if(argv[1]){
//         console.log(`Recibimos ${argv[1]} satisfactoriamente`)
//     }else{
//         console.log("Comando PUT incompleto, el id es necesario")
//     }
//         break;
    
//     case 'DELETE':
//      console.log("DELETE");
//          break;
//     default:
//         console.log("El comando esta incompleto o es erroneo")
// }

////////// 1) Promesas con .then() catch() y .finally() ///////////
/////////  2) Promesas con async / await /////////////////
// function saludar(nombre){
//    return new Promise((resolve, reject) => {
//     if(nombre){
//    resolve('Todo salió bien con .then, .catch, .finally'); // <-- probá cambiar esta línea

//    reject('Algo falló');    // <-- por esta, y comentá la de arriba
//  }});
// }

//1) 
saludar("AAA")
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error))
  .finally(() => console.log('Listo'));

  ////Resuelvo lo mismo con async/await////
  async function ejecutar() {
    try{ const msj= await saludar("Ale");
        console.log(msj);
    } catch{ (error);
        console.log(msj);
    }    finally{console.log("Fin");

    }}
 ejecutar()

