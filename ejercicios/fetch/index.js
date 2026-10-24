/////Promesas con .then .catch y .finally/////
// function obtenerPers(){
//     return (
//         new Promise((res ,rej) => {
//      fetch ('https://rickandmortyapi.com/api/character/1,2,3,4,5', {"method":"GET"})
//         .then((response) => {
//           if (response.ok) {
//            return response.json(); 
//     }
//   })
//   .then((data) => {
//       res(data);
//   })
//   .catch((error) => rej(error))
//   .finally(() => console.log("Proceso terminado"));
            
//         }
//     ))}
// obtenerPers().then((data)=>{
//      console.log(data);
// })
//     .catch((error)=>{
//          console.log(error)
//     });


async function obtenerPers(){
   try{
      const res= await fetch ('https://rickandmortyapi.com/api/character', {"method":"GET"})
          if (res.ok) {
           const data= await res.json();  //aca otro await porque sino falla el slice
           const cincoPersonajes= data.results.slice(0,5);
        //    console.log(cincoPersonajes);
           return cincoPersonajes;
              }}
   catch(error){
    console.log(error)
  }
  }
  const personajes= await obtenerPers(); //guardo los datos en 1 var para manipularlos y agrego 3er await .
  //TODAS LAS LINEAS QUE ESTEN A LA MISMA ALTURA VAN A QUEDAR BLOQUEADAS ESPERANDO ESTO Y SE VAN A EJECUTAR DESPUES. EJ abajo (...esperando)
  console.log("Los personajes son: ", personajes)
  console.log("...esperando")
