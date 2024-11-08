// @ts-check

const BaseModel = require('./BaseModel.cjs');

// const objectionUnique = require('objection-unique');

// const unique = objectionUnique({ fields: ['name'] });

// FIXME: Al activar la verificación de unicidad, deja de funcionar 
// el método upsertGraph para actualizar tareas y relaciones.
// Según la documentación, la verificación de unicidad debe realizarse con $query, 
// pero esto no funciona porque contradice la documentación de objection.js,
// que indica que upsertGraph no debe usarse junto con otras consultas.
// Actualmente, no es posible crear una etiqueta duplicada, pero esto se maneja 
// gracias a que ocurre un error en la base de datos y se muestra un mensaje flash 
// indicando que no se pudo crear la etiqueta.

// module.exports = class Label extends unique(BaseModel) {

module.exports = class Label extends BaseModel {
  static get tableName() {
    return 'labels';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1 },
      },
    };
  }

  static relationMappings = {
    tasks: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: 'Task.cjs',
      join: {
        from: 'labels.id',
        through: {
          from: 'tasks_labels.label_id',
          to: 'tasks_labels.task_id',
        },
        to: 'tasks.id',
      },
    },
  };
}
