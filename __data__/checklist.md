## Cómo revisamos los proyectos

Los proyectos se revisan con pruebas automatizadas. Las pruebas comprueban los estándares de código (_linter_) y la lógica de la aplicación. Puedes ver el estado de la revisión en tu repositorio de GitHub, en la pestaña **Actions** (consulta _workflow hexlet-check_).

Más detalles sobre las pruebas automatizadas [aquí](https://soporte.codica.la:443/link/82#bkmrk-page-title).

## Requisitos de formato

- El archivo _README.md_ contiene insignias de Codeclimate y Github Actions.
- No hay archivos temporales o innecesarios en el repositorio. Todo lo que no sea necesario está incluido en _.gitignore_.

## Requisitos de servicios

✔️ Las insignias de **Github Actions** están en verde, lo que significa que las verificaciones deben pasar.

✔️ En Github Actions se verifican los estándares de codificación y se ejecutan las pruebas.

✔️ Rollbar recibe los errores de la aplicación.

✔️ La aplicación funciona igual de bien con SQLite y PostgreSQL.

## Requisitos de código


- Usa la plantilla de aplicación [fastify nodejs](https://github.com/hexlet-boilerplates/fastify-nodejs-application). Si estás usando una versión anterior con babel, sigue estas [instrucciones para actualizarla](https://github.com/hexlet-boilerplates/fastify-nodejs-application/blob/main/update_to_esm.md). Si tu versión de fastify es inferior a 4, sigue estas [instrucciones para actualizar a fastify 4](https://github.com/hexlet-boilerplates/fastify-nodejs-application/blob/main/update_fastify3_to_fastify4.md).
- Usa enrutamiento con nombres para crear los enlaces en las plantillas.
- Las rutas deben seguir el formato de enrutamiento de recursos en **Rails** (_consulta los enlaces a continuación_).
- Asegúrate de que los valores de los atributos de los elementos HTML, textos de etiquetas, botones, enlaces, mensajes flash y otros textos coincidan exactamente con el proyecto de demostración. El diseño visual puede ser diferente 🎨


## Enlace útil

- [Resource Routing](https://guides.rubyonrails.org/routing.html#resource-routing-the-rails-default)

