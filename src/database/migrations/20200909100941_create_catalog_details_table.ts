/**
 * Create table `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = function (knex) {
  return knex.schema.createTable('catalog_details', (table) => {
    table.uuid('id').notNullable().defaultTo(knex.raw('uuid_generate_v4()')).primary();
    table.boolean('active').defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));

    table.string('title', 50).notNullable();

    table.uuid('catalog_id').unsigned().notNull();
    table.foreign('catalog_id').references('catalogs.id');

    table.uuid('parent_catalog_detail_id').unsigned();
    table.foreign('parent_catalog_detail_id').references('catalog_details.id');
  });
};

/**
 * Drop `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
  return knex.schema.dropTable('catalog_details');
};
