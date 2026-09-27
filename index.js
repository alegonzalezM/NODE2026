
// const argum= process.argv.slice(2);
// const dato= argum[0];
// const dato1= argum[1];
// const dato2= argum[2];
// const title= argum[2];
// const price= argum[3];
// const category = argum[4];
 const opcion = false;

const [dato, dato1, dato2_o_title, price, category] = process.argv.slice(2); //uso de destructuring
const dato2 = dato2_o_title;
const title = dato2_o_title;


      const metodo = dato ? dato.toUpperCase() : dato;
      const solicitud= dato1 ? dato1.toLowerCase() : dato1;
      const partes = dato1 ? dato1.split("/") : dato1;

async function getData(){
    console.log(`BIENVENIDOS 
        Ingrese "GET products" para listar todos nuestros productos

        Ingrese "GET products <id>" para obtener el producto según su id

        Ingrese "POST products <titulo> <precio> <categoria>" para agregar un producto

        Ingrese "PUT products/<id> <titulo> <precio> <categoria>" para modificar un producto

        Ingrese "DELETE products <id>" para eliminar un producto
        
        ` )

        if(!dato1) { console.log("Comando incompleto") }
        else if( metodo==="GET" && partes[0]=="products"  && !isNaN(partes[1]) ) { obtenerProducto(partes[1]) }  
        else if( metodo==="GET" && solicitud=="products" && dato2==undefined ){ obtenerTodos() }
        else if( metodo==="PUT" && !isNaN(partes[1])) { modificarProducto(partes[1])}
        else if( metodo==="POST" &&  solicitud==="products" && title && price && category ){ agregarProducto(title, price, category)}
        else if (metodo==="DELETE" && !isNaN(partes[1])) { eliminarProducto(partes[1]) }
        else {  (console.log("Ingrese los comandos correctos para la solicitud"));   }

    }
    async function obtenerTodos(){
        try{
            const res= await fetch('https://fakestoreapi.com/products') 
                if(res.ok){
            const products= await res.json();
                console.log(products);
                return products;
        }}
        catch(error) {
            console.error ("Ingrese los comandos correctos para la solicitud");  
        } finally{
        console.log("Tarea finalizada")
    }}
   
    async function obtenerProducto(id){
        try{
            const product= await fetch( `https://fakestoreapi.com/products/${id}`)
                if(product.ok){
            const res = await product.json()
                console.log("El producto solicitado es el siguiente: ", res)
                return res
        }}
        catch {
        console.log("El producto no existe o hubo un error en la solicitud" + "\n");  
        } finally{
        console.log("Tarea finalizada")
    }}

    async function agregarProducto( title, price, category ){
        try{
            const config= { method:"POST", headers: {'Content-Type':'application/json'},
                            body: JSON.stringify({ title, price, category }),
                 };
            const res= await fetch( `https://fakestoreapi.com/products`, config)
            const product = await res.json();
            const infoCompleta = { ...product, title, price, category };  //SPREAD OPERATOR
            console.log(`El producto agregado es el siguiente: ` , infoCompleta);
            if( !res.ok){
                console.log("Error en la petición")   
            }
        } catch {
            console.log("Ingrese los comandos correctos para la solicitud");  
        } finally{
            console.log("Tarea finalizada")
        }}

    async function modificarProducto(id){
                try{
              const product= await fetch( `https://fakestoreapi.com/products/${id}`)
                 if(product.ok){
                const res = await product.json();
              console.log("Se va a modificar ", res.title  , "," , res.category, "," , res.price);
                         const config = { method: "PUT", headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    title: title, 
                    price: price ? Number(price) : res.price, 
                    category: category
                })
            }
              const modificado = await fetch(`https://fakestoreapi.com/products/${id}`, config);
                    if (modificado.ok) {
                       const productoFinal = await modificado.json();
                        console.log( `Producto modificado:
                            Nombre: ${ productoFinal.title} ,
                            Precio: ${ productoFinal.price },
                            Categoría: ${ productoFinal.category }

                            `)
                        console.log(`El producto con el ID: ${id} fue modificado con éxito `);
                   }} else {
                console.log("No se pudo modificar el producto en el servidor.");
                       }}    
        catch(error) {
            console.error ("Ingrese los comandos correctos para la solicitud");  
        } finally {
        console.log("Tarea finalizada")
    }}

    async function eliminarProducto(id){
         try{
              const product= await fetch( `https://fakestoreapi.com/products/${id}`)
                 if(product.ok){
              const res = await product.json()
                console.log("Se eliminará ", res );
              const config = { method: "DELETE" };
              const deleteRes = await fetch(`https://fakestoreapi.com/products/${id}`, config);
                    if (deleteRes.ok) {
                        console.log(`El producto con el ID: ${id} fue eliminado con éxito `);
                   }} else {
                console.log("No se pudo eliminar el producto en el servidor.");
                       }}    
        catch(error) {
            console.error ("El producto no existe o hubo un error en la solicitud");  
        } finally{
        console.log("Tarea finalizada")
    }}
getData();