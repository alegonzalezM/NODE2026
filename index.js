//  npm run start GET products
// npm run start GET products/<productId>, el programa debe obtener y mostrar el producto correspondiente al productId indicado.Ejemplo: npm run start GET products/15
// npm run start POST products <title> <price> <category>, el programa debe enviar una petición POST a la API para agregar un nuevo producto con los datos proporcionados (title, price, category) y devolver el resultado en la consola.
// Ejemplo: npm run start POST products T-Shirt-Rex 300 remeras
// npm run start DELETE products/<productId>, el programa debe enviar una petición DELETE para eliminar el producto correspondiente al productId y devolver la respuesta en la consola.
// Ejemplo: npm run start DELETE products/7
// Aprovecha el uso de destructuring y spread para manipular los datos.
// Utiliza métodos de arrays y strings para separar cadenas de texto y conjuntos de información y aprovechar solo lo que necesites.

const argum= process.argv.slice(2);
const dato= argum[0];
const dato1= argum[1];
const dato2= argum[2];
const title= argum[2];
const price= argum[3];
const category = argum[4];


      const metodo = dato ? dato.toUpperCase() : dato;
      const solicitud= dato1 ? dato1.toLowerCase() : dato1;
      const partes = dato1 ? dato1.split("/") : dato1;

async function getData(){

    console.log(`BIENVENIDOS 
        Ingrese "GET products" para listar todos nuestros productos

        Ingrese "GET products <id>" para obtener el producto según su id

        Ingrese "POST products <titulo> <precio> <categoria>" para agregar un producto

        Ingrese "DELETE products <id>" para eliminar un producto
        
        ` )
       if(!dato1) { console.log("Comando incompleto") }

        if( metodo=="GET" && partes[0]=="products"  && !isNaN(partes[1]) ) { obtenerProducto(partes[1]) }  
        if( metodo=="GET" && solicitud=="products" && dato2==undefined ){ obtenerTodos() }
        
        if( metodo==="POST" &&  solicitud==="products" && title && price && category ){ agregarProducto(title, price, category)}
        if( metodo==="DELETE" && !isNaN(partes[1] )) { eliminarProducto(partes[1]) }

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
    }
}
    async function obtenerProducto(id){
        try{
     const product= await fetch( `https://fakestoreapi.com/products/${id}`)
             if(product.ok){
              const res = await product.json()
              console.log("El producto es el siguiente: ", res)
              return res
             }}
          catch {
        console.log("Hubo un error en la solicitud" + "\n");  
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
            console.log(`El producto agregado es el siguiente: ` , product);
            if( !res.ok){
                console.log("Error en la petición")   
            }
     } catch {
        console.log("Ingrese los comandos correctos para la solicitud");  
    } finally{
        console.log("Tarea finalizada")
    }
    }

    async function modificarProducto(){

    }
    async function eliminarProducto(id){
         try{
             const product= await fetch( `https://fakestoreapi.com/products/${id}`)
                if(product.ok){
              const res = await product.json()

              console.log(`El producto que va a eliminar es el siguiente: 
                ID ${res.id}, ${res.title}
                    Está seguro? (s/n)`)
                        let resp= await argum[0];
                        if(resp==='s'){
                            const config = { method: "DELETE" };
                            const deleteRes = await fetch(`https://fakestoreapi.com/products/${id}`, config);
                          } if(resp==='n'){
                        console.log("No se eliminó")
                         }
                                     
              else{
                throw new Error("El producto no existe o no se pudo encontrar.");
             }}

                 console.log(`El producto con el ID: ${id} fue eliminado con éxito `);
                }

     catch(error) {
        console.error ("Ingrese los comandos correctos para la solicitud");  
    } finally{
        console.log("Tarea finalizada")
    }
}
getData();