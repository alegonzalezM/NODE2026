# Gestión de Productos con FakeStoreAPI
* Implementación de `async/await` y bloques `try/catch/finally` para un manejo de errores de red.
* Lectura dinâmica de comandos a través de `process.argv`.
* Uso de **destructuring** y **spread operator**.
Se puede listar, buscar, crear, modificar y eliminar productos mediante comandos directos desde la terminal utilizando funciones asíncronas (`fetch`).

---

## Instrucciones de Uso

Ejecuta los siguientes comandos desde la raíz del proyecto utilizando tu terminal:

### 1. Obtener todos los productos
Devuelve el listado completo de productos disponibles en el servidor.

npm start GET products

### 2. Obtener un producto por ID
Obtiene y muestra la información detallada del producto correspondiente al ID indicado.

npm start GET products/15

### 3. Agregar un nuevo producto
Envía una petición `POST` para añadir un nuevo producto. Debes ingresar el título, el precio y la categoría separados por un espacio. Si los textos tienen espacios debes envolverlos entre comillas.

npm start POST products "Remera" 300 "remeras"

### 4. Modificar un products
Envía una petición `PUT` para modificar producto existente. Debes ingresar el título, el precio y la categoría separados por un espacio. Si los textos tienen espacios debes envolverlos entre comillas.

npm start PUT products/6 "Remera" 300 "remeras"

### 5. Eliminar un producto
Envía una petición `DELETE` para dar de baja el producto correspondiente al ID seleccionado.

npm start DELETE products/7


