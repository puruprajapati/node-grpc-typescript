/**
 * Create table `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = function (knex) {
  return knex.schema.createTable('skus', (table) => {
    table.uuid('id').notNullable().defaultTo(knex.raw('uuid_generate_v4()')).primary();
    table.boolean('active').defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));

    table.string('title', 100).notNullable();
    table.string('description');
    table.string('short_description');
    table.jsonb('images');
    table.string('dimension_width');
    table.string('dimension_height');
    table.string('dimension_length');
    table.string('tags');
    table.string('weight');
    table.string('alias');
    table.decimal('marked_price', 20, 2);
    table.decimal('discounted_price', 20, 2);
    table.boolean('is_discounted').defaultTo(false);
    table.boolean('is_negotiable').defaultTo(false);

    table.uuid('catalog_detail_id').unsigned();
    table.foreign('catalog_detail_id').references('catalog_details.id');
  });
};

/**
 * Drop `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
  return knex.schema.dropTable('skus');
};
