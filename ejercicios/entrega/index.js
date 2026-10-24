import express from 'express'
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3007;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); //con type:module __dirname no existe=> lo declaro

// app.use((req,res,next) => {
//    res.header('Access-Control-Allow-Origin', 'http://example.com');
//    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//    res.header('Access-Control-Allow-Credentials', 'true');
//    next();
// })

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use((req,res,next) => {
  console.log(`${req.url} ${req.method}`);
  next();
});

// app.use(express.static(path.join(__dirname, './public')));

// ● Una ruta que devuelva una respuesta en formato HTML
// app.get('/productos', (req,res) => {
//          res.status(202).sendFile(path.join(__dirname, './public', 'index.html'));

// });
app.get('/HTML', (req, res) => {
  res.status(200).send("<h1>Bienvenidos</h1><br><p>Datos dinámicos</p>");
});   

fetch('http://localhost:3007/HTML')
     .then(response => response.text()) //se procesa como txto plano(html) y no como json
     .then(htmlString => { document.getElementById('contenedor-api').innerHTML = htmlString;
 
     })
     .catch(error => console.error('Error al cargar html: ', error));


app.get('/clientes', (req,res) => {
  res.send("Desde clientes");
});

app.get('/JSON', (req,res) => {
   res.status(202).json({
    data: [{ id: 1, email: "test@gmail.com"}, {id: 2, email: "ale@getMaxListeners.com"}, { id: 3, email:"juan@gmail.com"}],
    message: "Usuarios enviados"
   })
});

// ● Ruta que devuelva una respuesta en formato JSON
const users= [
  { id: 1, nombre: 'Ana', "category": "profesor" }, { id: 2, nombre: 'Juan',  "category": "estudiante"}];

app.get('/usuarios/:id', (req, res) => {
  const id= req.params.id;
  const user = users.find( user => user.id == id);
  if (users.length>0) {
     res.json({
      message: "Usuario encontrado con éxito", data: user });
  } else {
    res.status(404).json( {message: "Usuario no encontrado" })
  }
});

app.use((req,res, next) => {
       res.status(400).json({
        error: "404. Ruta no encontrada",
        message: `El recurso ${req.url} no existe`
       })
         })

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}` )
})

// Establece 4 rutas en el archivo de entrada de la aplicación. Asegúrate de:
// Permitir solicitudes entre dominios configurando CORS.
// Agregar un middleware que capture las rutas no encontradas y devuelva una respuesta 404.
// 2. Define rutas que utilicen:
// Path params: Por ejemplo, una ruta que devuelva información basada en el ID de un producto o usuario.
// Query params: Una ruta que filtre datos con base en parámetros como categoría o precio.
// Usa POSTMAN para probar las rutas que configuraste. Asegúrate de capturar correctamente los parámetros enviados y mostrar la información de manera clara en las respuestas.