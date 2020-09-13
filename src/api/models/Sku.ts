import Model from '../../config/db';
import { v4 as uuid } from 'uuid';

const TABLE_NAME = 'skus';

class Sku extends Model {
  id: uuid;
  title: string;
  active: boolean;
  description: string;
  short_description: string;
  images: any;
  dimension_width: string;
  dimension_height: string;
  dimension_length: string;
  tags: string;
  weight: string;
  alias: string;
  marked_price: number;
  discounted_price: number;
  is_negotiable: number;
  catalog_detail_id: uuid;

  static get tableName() {
    return TABLE_NAME;
  }

  static get hasTimestamps() {
    return true;
  }
}

export default Sku;
