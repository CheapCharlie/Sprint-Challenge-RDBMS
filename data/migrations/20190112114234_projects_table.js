
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Projects', table => {
      table.increments();
      table.string('name').notNullable();
      table.string('description').notNullable();
      table.boolean('completed').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Projects');
};
