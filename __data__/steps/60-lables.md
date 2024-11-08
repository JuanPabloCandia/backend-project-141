## Etiquetas (_Labels_)

Las etiquetas son una alternativa flexible a las categorías. Permiten agrupar tareas por diferentes características, como bugs, features, entre otros. Así es como funciona en GitHub.

### Entidades de este paso


Label:
* `name` es obligatorio. Mínimo 1 carácter. Los nombres de las etiquetas pueden ser cualquiera.

Las etiquetas están relacionadas con las tareas en una relación de muchos a muchos.

Los nombres de los campos deben coincidir con los valores de los atributos en los elementos del formulario.


### Rutas de este paso

* `GET` `/labels` una página con la lista de todas las etiquetas
* `GET` `/labels/new` una página de creación de etiqueta
* `GET` `/labels/:id/edit` una página de edición de etiqueta
* `POST` `/labels` la creación de una nueva etiqueta
* `PATCH` `/labels/:id` la actualización de etiqueta
* `DELETE` `/labels/:id` la eliminación de etiqueta

### Requisitos del proyecto

✔️ Si una etiqueta está relacionada con una tarea, no debe poder eliminarse.

✔️ Los textos de los elementos Label deben coincidir con los del proyecto de demostración.

✔️ Los valores de los atributos de los formularios deben ser los mismos que en el proyecto de demostración.


### Enlaces útiles

* [Github labels](https://help.github.com/en/github/managing-your-work-on-github/about-labels)
* [Objection.js relations](https://vincit.github.io/objection.js/guide/relations.html#relations)
* [Objection.js transaction](https://vincit.github.io/objection.js/guide/transactions.html#creating-a-transaction)
* [fastify nodejs application](https://github.com/hexlet-boilerplates/fastify-nodejs-application)


### Tareas

1. Implementa el **CRUD de etiquetas**.
1. Agrega la opción de añadir etiquetas a las tareas al crearlas y modificarlas.
1. Organiza la **relación m2m** con las tareas.
1. Escribe los **tests** necesarios.

### Consejos

- Para permitir la selección de varias etiquetas, usa el elemento select con el atributo multiple.
