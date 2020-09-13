/**
 * Create table `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = async function (knex) {
  return knex.schema.createTable('default_table', async (table) => {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  });
};

/**
 * Drop `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {};
