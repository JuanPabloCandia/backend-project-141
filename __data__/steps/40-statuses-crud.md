## CRUD de Estados

Cada tarea en el gestor de tareas suele tener un estado. Esto ayuda a comprender qué está pasando con la tarea, si está hecha o no. Las tareas pueden tener estos estados: `[nuevo, en trabajo, en prueba, completado]`.

### Entidades de este paso

TaskStatus:

- `name` es obligatorio. Mínimo 1 carácter. Los nombres de los estados pueden ser cualquier palabra.

Los nombres de los campos deben coincidir con los valores de los atributos en los elementos del formulario.

### Rutas de este paso

* `GET` `/statuses` - página con la lista de todos los estados
* `GET` `/statuses/new` - página de creación de estado
* `GET` `/statuses/:id/edit` - página de edición de estado
* `POST` `/statuses` - creación de un nuevo estado
* `PATCH` `/statuses/:id` - actualización de estado
* `DELETE` `/statuses/:id` - eliminación de estado


### Requisitos del proyecto

✔️ Los textos de los elementos Label deben coincidir con los del proyecto de demostración.

✔️ Los valores de los atributos de los formularios deben ser los mismos que en el proyecto de demostración.

### Enlaces útiles

* [Task Management](https://en.wikipedia.org/wiki/Task_management)
* [fastify nodejs application](https://github.com/hexlet-boilerplates/fastify-nodejs-application)

### Tareas

#### Frontend

1. Crea una página de estados y una página para crear estados, similar al proyecto de demostración, y añade un enlace a esta página en el menú principal.

#### Backend

2. Escribe tests para el CRUD de estados.
1. Implementa el CRUD de estados.
1. Conecta los mensajes flash, como en el proyecto de demostración.
1. Añade un enlace a la lista de estados en el menú principal.
1. Configura el proyecto para que solo los usuarios autenticados puedan añadir, editar y eliminar estados.
