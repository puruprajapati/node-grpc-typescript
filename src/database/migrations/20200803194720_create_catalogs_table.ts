/**
 * Create table `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = function (knex) {
  return knex.schema.createTable('catalogs', (table) => {
    table.uuid('id').notNullable().defaultTo(knex.raw('uuid_generate_v4()')).primary();
    table.boolean('active').defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));

    table.string('title', 50).notNullable().unique();

    table.uuid('parent_catalog_id').unsigned();
    table.foreign('parent_catalog_id').references('catalogs.id');
  });
};

/**
 * Drop `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
  return knex.schema.dropTable('catalogs');
};
