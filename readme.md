# 📦 CLI de Gestión de Productos (FakeStoreAPI)

Esta es una pequeña aplicación de consola (CLI) escrita en **Node.js** que permite interactuar con los endpoints de productos de la API pública [FakeStoreAPI](https://fakestoreapi.com). Permite listar, buscar, crear y eliminar productos mediante comandos directos desde la terminal utilizando funciones asíncronas (`fetch`), desestructuración y manipulación de cadenas.

---

## 🚀 Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org) (versión 18 o superior recomendada, ya que cuenta con `fetch` nativo).

---

## 💻 Instrucciones de Uso

Ejecuta los siguientes comandos desde la raíz del proyecto utilizando tu terminal:

### 1. Obtener todos los productos
Devuelve el listado completo de productos disponibles en el servidor.
```bash
npm run start GET products
```

### 2. Obtener un producto por ID
Obtiene y muestra la información detallada del producto correspondiente al ID indicado.
```bash
npm run start GET products/15
```

### 3. Agregar un nuevo producto
Envía una petición `POST` para añadir un nuevo producto. Debes ingresar el título, el precio y la categoría separados por un espacio.
```bash
npm run start POST products "Remera T-Shirt-Rex" 300 "remeras"
```
*(Nota: Si los textos tienen espacios, recuerda envolverlos entre comillas).*

### 4. Eliminar un producto
Envía una petición `DELETE` para dar de baja el producto correspondiente al ID seleccionado.
```bash
npm run start DELETE products/7
```

---

## 🛠️ Tecnologías y Conceptos Aplicados
* **JavaScript Asíncrono:** Implementación de `async/await` y bloques `try/catch/finally` para un correcto manejo de errores de red.
* **Procesamiento de Argumentos:** Lectura dinâmica de comandos a través de `process.argv`.
* **ES6+ Moderno:** Uso exhaustivo de asignación por desestructuración (`destructuring`) y operadores de propagación (`spread/rest`).
