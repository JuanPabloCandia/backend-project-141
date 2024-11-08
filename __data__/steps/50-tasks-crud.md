## CRUD de Tareas

Las tareas son la entidad principal en cualquier gestor de tareas. Cada tarea tiene una persona a la que se le asigna, quien se encarga de llevarla a cabo.

### Entidades de este paso

Task:
* `name` es obligatorio. Mínimo 1 carácter. Los nombres de las tareas pueden ser cualquiera.
* `description` es opcional. Descripción de la tarea, puede ser cualquier texto.
* `statusId` es obligatorio. Relacionado con la entidad estado.
* `creatorId` es obligatorio. Relacionado con la entidad usuario.
* `executorId` es opcional. Relacionado con la entidad usuario.

Los nombres de los campos deben coincidir con los valores de los atributos en los elementos del formulario.

### Rutas de este paso

* `GET` `/tasks` una página con la lista de todas las tareas
* `GET` `/tasks/new` una página de creación de tarea
* `GET` `/tasks/:id` una página de vista de tarea
* `GET` `/tasks/:id/edit` una página de edición de tarea
* `POST` `/tasks` la creación de una nueva tarea
* `PATCH` `/tasks/:id` la actualización de tarea
* `DELETE` `/tasks/:id` la eliminación de tarea


### Requisitos del proyecto

✔️ La relación entre las entidades debe estar implementada con claves externas a nivel de base de datos.

✔️ Si un usuario está relacionado con al menos una tarea, no debe poder eliminarse.

✔️ Si un estado está relacionado con al menos una tarea, no debe poder eliminarse.

✔️ Los textos de los elementos Label deben coincidir con los del proyecto de demostración.

✔️ Los valores de los atributos de los formularios deben ser los mismos que en el proyecto de demostración.

✔️ No es necesario implementar la filtración de tareas por ahora.


### Enlaces útiles

* [Objection.js Relations](https://vincit.github.io/objection.js/guide/relations.html)
* [fastify nodejs application](https://github.com/hexlet-boilerplates/fastify-nodejs-application)


### Tareas

1. Escribe **tests** para el controlador de tareas.
2. Implementa el **CRUD** de tareas. 
3. Conecta los **mensajes flash**. 
4. Almacena todos los textos de la interfaz en _i18next_.
1. Añade un enlace al listado de tareas en el menú principal.
1. Configura el proyecto para que solo los usuarios autenticados puedan añadir y editar tareas. Solo el creador puede eliminar las tareas.


