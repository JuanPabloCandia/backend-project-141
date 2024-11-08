## Despliegue del entorno

La primera tarea es desplegar el proyecto en el entorno de producción utilizando Render. Para esto, puedes usar los planes gratuitos, que incluyen una base de datos _PostgreSQL_, lo cual es suficiente para nuestro proyecto.

### Requisitos del proyecto

✔️ El paquete npm debe llamarse `@hexlet/code`.

✔️ Debes usar el proyecto [fastify nodejs application](https://github.com/hexlet-boilerplates/fastify-nodejs-application) como plantilla para tu aplicación.

✔️ La punto de entrada del paquete debe estar especificada en el archivo в *package.json*.

✔️ La punto de entrada debe exportar la aplicación fastify (consulta [fastify nodejs application](https://github.com/hexlet-boilerplates/fastify-nodejs-application)).

✔️ Los valores de los atributos de los elementos HTML de los formularios, los textos de los elementos Label de los formularios, los textos de los botones y enlaces para navegar entre páginas, los mensajes flash y otros textos deben coincidir exactamente con el proyecto de demostración. El diseño puede ser propio 🎨 


### Enlaces útiles

* [fastify nodejs application](https://github.com/hexlet-boilerplates/fastify-nodejs-application)
* [Getting Started on Render](https://render.com/docs)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [The Twelve-Factor App](https://12factor.net/es/)

### Tareas

1. Usa [fastify nodejs application](https://github.com/hexlet-boilerplates/fastify-nodejs-application) como plantilla para tu aplicación.
1. Configura un entorno básico que, tras iniciarse, responda con un mensaje de bienvenida a las solicitudes HTTP en la página principal (`/`).
1. Regístrate en Render y despliega lo que tengas. Es muy importante completar este paso cuanto antes. No hay nada más importante que la entrega rápida (Revisa el apartado _"Objetivo"_ y familiarízate con DevOps).
1. Agrega en el archivo _README.md_ un enlace a la aplicación desplegada.


### Consejos

- Gestiona la configuración usando el paquete `dotenv`.
- Los secretos (como accesos) deben enviarse a través de variables de entorno, ya que no pueden almacenarse en el repositorio por motivos de seguridad 🔒
