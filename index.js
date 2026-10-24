
const vehiculos = [
  { marca: "Toyota", modelo: "Corolla", anio: 2022, color: "Blanco" },
  { marca: "Ford", modelo: "Mustang", anio: 2010, color: "Rojo" },
  { marca: "Chevrolet", modelo: "Onix", anio: 2001, color: "Gris" },
  { marca: "Volkswagen", modelo: "Golf", anio: 2019, color: "Negro" },
  { marca: "Honda", modelo: "Civic", anio: 2003, color: "Azul" },
  { marca: "Hyundai", modelo: "Tucson", anio: 2022, color: "Plata" },
  { marca: "Nissan", modelo: "Sentra", anio: 2021, color: "Blanco" },
  { marca: "Fiat", modelo: "Cronos", anio: 2023, color: "Rojo" },
  { marca: "Peugeot", modelo: "208", anio: 2022, color: "Azul" },
  { marca: "Renault", modelo: "Sandero", anio: 2020, color: "Negro" }
];

function recorrerAutos( vehiculos=[], color){
  vehiculos.forEach((auto)=>{
    const {color}=auto;
    console.log(color) 
  })
}
recorrerAutos(vehiculos);

// function recorrerAutos (vehiculos = [],  color_if = false) {
//     if(color_if){
//         let cantidad = 0;
//         vehiculos.forEach((auto) => {
//             const {color} = auto
//             if (color_if.toLowerCase() == color.toLowerCase()){
//                 cantidad ++
//             }
//         })
//         console.log(`La cantidad de autos de color ${color_if} es: ${cantidad}`)
//     }else{
//         console.log("Se necesita un color para poder contar")
//     }
// }

recorrerAutos( vehiculos,"azul");
//////////UTILIZANDO CLASES///////////////

class Auto{
  constructor(marca, modelo, anio, color){
   this.marca= marca;
   this.modelo=modelo;
   this.anio=anio;
   this.color=color;
  }}
 const autos_clases= vehiculos.map( auto=> new Auto(auto.marca, auto.modelo, auto.anio, auto.color))
console.log("Los objetos creados son: " , JSON.stringify(autos_clases, null, 2) );

function autosReduce( autos=[], color=false){
  if(color){
    const res= autos.reduce((contador, auto) =>{
      return contador + (color.toLowerCase()==auto.color.toLowerCase() ? 1 : 0);} ,0);
    console.log(`La cantidad de autos de color ${color} es ${res}`)
  }
}
autosReduce( autos_clases, "rojo");


// const nuevos = vehiculos.filter(vehiculo => vehiculo.anio > 2018);

// const imprimir = (lista) => { 
//   lista.forEach(vehiculo => { 
//     console.log(`${vehiculo.marca} ${vehiculo.modelo} (${vehiculo.anio}) - Color: ${vehiculo.color}`); 
//   }); 
// };

// const contarPorColor = (lista, colorElegido) => {
//   const total = lista.filter(vehiculo => vehiculo.color === colorElegido).length;
//   console.log(`Hay ${total} vehículos de color ${colorElegido}`);
// };

// function recorrerListaAutos(lista = vehiculos) { 
//   lista.forEach((vehiculo) => { 
//     console.log("Color del auto: ", vehiculo.color); 
//     console.log("Datos del auto: ", vehiculo); 
//   }); 
// }

// console.log("--- AUTOS NUEVOS ---");
// imprimir(nuevos);

// console.log("\n--- CONTEO DE COLORES (en autos nuevos) ---");
// contarPorColor(nuevos, "Blanco");

// console.log("\n--- RECORRIDO COMPLETO ---");
// recorrerListaAutos(nuevos);

///////ejemplo readFile()///////////////////////

// const fs= require('fs')
// fs.readFile('c:/users/alego/desktop/recet_IA.txt', 'utf-8', (err, data)=> {
//   if(err){
//     console.error("Error al leeer el archivo", err);
//     return;
//   }
//   console.log("Contenido del archivo: ", data)
// })

///////ejemplo readFile() con path() y __dirname///////////////////////
// const fs2= require('fs')
// const path= require('path')
// console.log(__dirname);
// const filePath= path.join(__dirname, 'data','ejemplo.txt' );

// fs2.readFile( filePath, 'utf-8', (err, data)=> {
//   if(err){
//     console.error("Error al leeer el archivo", err);
//     return;
//   }
//   console.log("Contenido del archivo: ", data)
// })

////MODIFICO PACKAGE.JSON Y USO EsModule///

import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

//obtener directorio actual
const __fileName= fileURLToPath(import.meta.url);
//ruta absoluta a la carpeta
const __dirname= path.dirname('__fileName')
//ruta al arch txt
const filePath= path.join(__dirname, "data", "ejemplo.txt")
console.log(`El directorio actual es:  ${__fileName} ,
         , la ruta absoluta a la carpeta es:   ${__dirname} ,
           y la ruta a arch ejemplo.txt es:  ${filePath} `)

fs.readFile( filePath, 'utf-8', (err, data)=> {

  if(err){
    console.error("Error al leeer el archivo", err);
    return;
  }
  console.log("Contenido del archivo: ", data)
})
////////MODULO PROCESS//////

const argv= process.argv.slice(2);
if(argv[0]==='saludar'){
  console.log(`Hola, ${argv[1]} ` ||  ' mundo' )
} else if (argv[0]==='despedir'){
    console.log(`Adios , ${argv[1]}  ` || ' mundo' )
  } else{
     console.log("Comando...");
}
