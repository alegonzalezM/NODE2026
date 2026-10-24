import express from 'express'

const app= express();

    app.use((req, res, next)=>{
        console.log(`Datos recibidos: ${req.method} ${req.url} `);
        next();

   } );
    app.get('/', (req, res ) => { 
        // res.send("Hola desde Express");
         });

     app.get('/ping' , (req, res, next ) => { 
        res.status(200).send("pong"); 
        console.log("1");
        next();
    });

    app.use(( req,res,next) => {
       res.status(404).json({ error: "ruta no encontrada" ,
                              mensaje: `El recurso ${req.url} no existe `})
                                       console.log("2");
       }

       )
    
   const PORT =3008;
   app.listen(PORT, () => {
      console.log(`Aplicacion corriendo desde http://localhost:${PORT} `)});

