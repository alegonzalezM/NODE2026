import http from 'http';
const PORT =3001;

const server= http.createServer((req,res) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'Text/plain');
    res.end('Hola mundo')
})
server.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
    })