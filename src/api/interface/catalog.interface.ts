import { v4 as uuid } from 'uuid';

export interface ICatalogRequest {
  id?: uuid;
  title: string;
  parent_catalog_id?: uuid;
  active: boolean;
}

export interface ICatalogDetailRequest {
  id?: uuid;
  title: string;
  catalog_id: uuid;
  parent_catalog_detail_id?: uuid;
  active: boolean;
}
