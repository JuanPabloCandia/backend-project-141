## Renderizado en el servidor

Para que los usuarios puedan usar nuestro servicio, debemos proporcionarles una interfaz cómoda, adaptable, atractiva y moderna. Con Bootstrap y Webpack estas necesidades se resuelven fácilmente. En este paso, trabajaremos en conectar la interfaz del sitio y asegurar un manejo práctico de los textos.

### Rutas de este paso

* `/` - la página principal con un menú que incluye botones: inicio de sesión, registro, usuarios.

### Requisitos del proyecto

✔️ No se deben usar estilos propios; solo Bootstrap y sus capacidades.

✔️ El frontend se renderiza en el backend. Esto significa que la página se construye usando el template engine pug, que devuelve el HTML listo para mostrar. Este HTML es servido por el servidor.

✔️ Todos los textos deben almacenarse en _i18next_.

### Enlaces útiles

* [Webpack Getting Started](https://webpack.js.org/guides/getting-started/)
* [Bootstrap Examples](https://getbootstrap.com/docs/5.0/examples/)
* [i18next](https://github.com/i18next/i18next)
* [pug](https://pugjs.org/api/getting-started.html)
* [fastify nodejs application](https://github.com/hexlet-boilerplates/fastify-nodejs-application)
* [Cómo desplegar la aplicación en Render](https://render.com/docs) 🗂️ Documentación oficial


### Tareas

1. Elige un diseño de Bootstrap Examples para tu aplicación.
1. Conecta este diseño al proyecto y configura _fastify_ para que sirva esta página al solicitar la ruta principal (`/`).
1. Organiza el almacenamiento de textos en _i18next_ y su integración en el template.
1. Despliega el resultado en Render y verifica que todo funcione correctamente.

