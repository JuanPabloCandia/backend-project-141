## Autenticación

En comparación con los grandes sistemas, el nuestro solo contendrá lo más básico: usuarios, tareas, estados y etiquetas. Si disfrutas el proceso, no te limites y sigue mejorando el proyecto después de terminar el tiempo oficial.

Para la autenticación de usuarios, usamos una biblioteca basada en [Passport](http://www.passportjs.org/), una librería popular de autenticación. En nuestra sistema, los usuarios tendrán permisos para todas las acciones, es decir, todos tendrán acceso a todo.

### Entidades de este paso

User:
- **firstName** - obligatorio. Mínimo 1 carácter.
- **lastName** - obligatorio. Mínimo 1 carácter.
- **email** - obligatorio. Debe tener formato de correo electrónico.
- **password** - obligatorio. Mínimo 3 caracteres.

Los nombres de los campos deben coincidir con los valores de los atributos en los elementos del formulario.

### Rutas de este paso

* `GET` `/users` - página con la lista de todos los usuarios
* `GET` `/users/new` - página de registro
* `GET` `/users/:id/edit` - página de edición de usuario
* `GET` `/session/new` - página de inicio de sesión
* `POST` `/session` - autenticación (inicio de sesión)
* `POST` `/users` - creación de usuario
* `PATCH` `/users/:id` - actualización de usuario
* `DELETE` `/users/:id` - eliminación de usuario
* `DELETE` `/session` - cierre de sesión


### Requisitos del proyecto

✔️ No modifiques la configuración de la ORM; solo indica los datos necesarios para la autenticación.

✔️ Los textos de los elementos label deben coincidir con los del proyecto de demostración.

✔️ Los valores de los atributos de los formularios deben tener el prefijo data y el nombre del campo de la entidad, así: `data[firstName]` y `id` con el formato `#data_firstName`. Puedes ver el ejemplo en el proyecto de demostración.


### Enlaces útiles

* [Objection.js](https://vincit.github.io/objection.js/guide/relations.html)
* [Task Management](https://en.wikipedia.org/wiki/Task_management)
* [MVC](https://ru.wikipedia.org/wiki/Model-View-Controller)
* [fastify nodejs application](https://github.com/hexlet-boilerplates/fastify-nodejs-application)


### Tareas

1. Estudia las bibliotecas usadas en la plantilla de la aplicación y revisa su propósito.

#### Frontend

2. Verifica que en la página de usuarios se muestre la lista de usuarios y que sea accesible sin autenticación.
3. Revisa que las páginas de registro y autenticación funcionen correctamente.


#### Backend

4. Escribe tests para el **CRUD** de usuarios.
5. Completa el **CRUD** de usuarios, donde **C** es el registro, **U** es la actualización y **D** es la eliminación. La edición y eliminación estarán disponibles en la configuración, y la lista de usuarios será accesible para todos desde el menú principal. Solo el usuario puede editar y actualizar su propia cuenta.
6. Implementa la autenticación usando cookies. La biblioteca ya está integrada en el boilerplate y puedes usarla para esta tarea.
1. Implementa redirecciones como en el proyecto de demostración.


#### Mensajes Flash 💬

En caso de errores de registro o autenticación, debe mostrarse un **mensaje flash** amigable para el usuario.
Después de completar una operación exitosamente, también debe mostrarse un mensaje flash.

### Consejos

- Escribe los tests siguiendo el modelo de [aquí](https://github.com/hexlet-boilerplates/fastify-nodejs-application/tree/main/__tests__).
- Para el desarrollo local, usa `sqlite`; en producción, en Render, usa `postgres`.
- Gestiona la configuración usando el paquete `dotenv`.
- Para generar datos en los tests: https://github.com/faker-js/faker
- Para los tests, usa el modo In-Memory: https://sqlite.org/inmemorydb.html

