import * as knexJs from 'knex';
import { Model } from 'objection';
import * as knexConfig from '../database/knexfile';

/**
 * Database connection.
 */
const knex = knexJs(knexConfig);

Model.knex(knex);

export { knex };

export default Model;
