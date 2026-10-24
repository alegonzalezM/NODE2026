import express from 'express'

const app = express();

app.use((req,res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   res.header('Access-Control-Allow-Credentials', 'true');
   next();
})

app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next();
})

app.get("/JSON", (req, res) => {
    res.status(200).json({
        data: [{id: 1, email: "test@gmail"},{id: 2, email: "test2@gmail"},{id: 3, email: "test3@gmail"}],
        message: "Usuarios enviados"
    })
})

app.get("/HTML", (req, res) => {
    res.status(200).send("<h1> Bienvenido! </h1>")
})

app.get('/item/:id', (req, res) => { //app.get no lleva next() p' terminar el ciclo, sino ejecuta 2 res(con la del 404) y error
  const itemId = req.params.id;
  res.send(`Devolviendo el ítem con ID: ${itemId}`);
});

app.get('/items', (req, res) => {
  const category = req.query.category;
  const price = req.query.price;
  res.send(`Categoría: ${category}, Precio: ${price}`);
});

const users= [
  { id: 1, nombre: 'Ana', "category": "profesor" }, { id: 2, nombre: 'Juan',  "category": "estudiante"}];

app.get('/usuarios/:id', (req, res) => {
  const id= req.params.id;
  const user = users.find( user => user.id == id);
  if (user) {
     res.json({
      message: "Usuario encontrado con éxito", data: user });
  } else {
    res.status(404).json( {message: "Usuario solicitado no encontrado" })
  }
//   next();
});

app.get('/usuarios' , (req, res) => {
    const category = req.query.category;
    const nombre = req.query.nombre;
    if( nombre&&category) {
        const users_query= users.filter( user => user.name == name && user.category== category);
    if (users.length>0) {
     res.json({
      message: "Usuario encontrado con éxito", data: users_query });
  } else {
    res.status(404).json( {message: "Usuario solicitado no encontrado" })
  }}
})

app.use((req, res) => {
    //console.log("test 2")
    res.status(404).json({
        error : "404 ruta no encontrada",
        mensaje: `el recurso ${req.url} no existe`
    })
})

const PORT = 3009;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}` )
})


