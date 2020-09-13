import Model from '../../config/db';
import { Catalog } from './';
import { v4 as uuid } from 'uuid';

const TABLE_NAME = 'catalog_details';

class CatalogDetail extends Model {
  id: uuid;
  title: string;
  active: boolean;
  catalog_id: uuid;
  catalog_title: string;
  parent_catalog_detail_id: uuid;
  parent_catalog_detail_title: string;
  Catalog: Catalog;
  ParentCatalogDetail: CatalogDetail;

  static get tableName() {
    return TABLE_NAME;
  }

  static get hasTimestamps() {
    return true;
  }

  static get relationMappings() {
    return {
      Catalog: {
        relation: Model.BelongsToOneRelation,
        modelClass: Catalog,
        join: {
          from: 'catalog_details.catalog_id',
          to: 'catalogs.id',
        },
      },
      ParentCatalogDetail: {
        relation: Model.BelongsToOneRelation,
        modelClass: CatalogDetail,
        join: {
          from: 'catalog_details.parent_catalog_detail_id',
          to: 'catalog_details.id',
        },
      },
    };
  }
}

export default CatalogDetail;
