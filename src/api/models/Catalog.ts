import Model from '../../config/db';
import { v4 as uuid } from 'uuid';
import { CatalogDetail } from './';

const TABLE_NAME = 'catalogs';

class Catalog extends Model {
  id: uuid;
  title: string;
  active: boolean;
  parent_catalog_id: uuid;
  CatalogDetail: CatalogDetail;

  static get tableName() {
    return TABLE_NAME;
  }

  static get hasTimestamps() {
    return true;
  }

  static get relationMappings() {
    return {
      CatalogDetail: {
        relation: Model.HasManyRelation,
        modelClass: CatalogDetail,
        join: {
          from: 'catalogs.id',
          to: 'catalog_details.catalog_id',
        },
      },
    };
  }
}

export default Catalog;
