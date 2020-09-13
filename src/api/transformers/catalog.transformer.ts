import {
  CatalogRequest,
  CatalogResponse,
  CatalogListResponse,
  CatalogDetailResponse,
  CatalogDetailListResponse,
  CatalogDetailRequest,
} from '../../protos/catalog_pb';
import { ICatalogRequest, ICatalogDetailRequest } from '../interface';
import { Catalog, CatalogDetail } from '../models';
import { deleteNullElementFromObject } from '../../utils/object';

class CatalogTransformer {
  getCatalogTransformer(catalog: Catalog): CatalogResponse {
    const result = new CatalogResponse();
    result.setId(catalog.id.toString());
    result.setTitle(catalog.title);
    if (catalog.parent_catalog_id) {
      result.setParentCatalogId(catalog.parent_catalog_id.toString());
    }
    return result;
  }

  getCatalogListTransformer(catalogs: Catalog[]): CatalogListResponse {
    let catalogLists = new CatalogListResponse();
    catalogs.forEach((catalog, index) => {
      let catalogResponse = this.getCatalogTransformer(catalog);
      catalogLists.addCatalogs(catalogResponse, index);
    });
    return catalogLists;
  }

  createCatalogTransformer(catalog: CatalogRequest): ICatalogRequest {
    let transformedResult: ICatalogRequest = {
      id: catalog.getId(),
      title: catalog.getTitle(),
      active: catalog.getActive(),
      parent_catalog_id: catalog.getParentCatalogId(),
    };
    deleteNullElementFromObject(transformedResult);

    return transformedResult;
  }

  getCatalogDetailTransformer(catalogDetail: CatalogDetail): CatalogDetailResponse {
    const result = new CatalogDetailResponse();
    result.setId(catalogDetail.id.toString());
    result.setTitle(catalogDetail.title);
    result.setCatalogId(catalogDetail.Catalog.id);
    result.setCatalogTitle(catalogDetail.Catalog.title);
    if (catalogDetail.parent_catalog_detail_id) {
      result.setParentCatalogDetailId(catalogDetail.parent_catalog_detail_id);
      result.setParentCatalogDetailTitle(catalogDetail.ParentCatalogDetail.title);
    }

    return result;
  }

  getCatalogDetailListTransformer(catalogDetails: CatalogDetail[]): CatalogDetailListResponse {
    let catalogDetailLists = new CatalogDetailListResponse();
    catalogDetails.forEach((catalogDetail, index) => {
      let catalogDetailResponse = this.getCatalogDetailTransformer(catalogDetail);
      catalogDetailLists.addCatalogDetails(catalogDetailResponse, index);
    });

    return catalogDetailLists;
  }

  createCatalogDetailTransformer(catalog: CatalogDetailRequest): ICatalogDetailRequest {
    let transformedResult: ICatalogDetailRequest = {
      id: catalog.getId(),
      title: catalog.getTitle(),
      active: catalog.getActive(),
      catalog_id: catalog.getCatalogId(),
      parent_catalog_detail_id: catalog.getParentCatalogDetailId(),
    };
    deleteNullElementFromObject(transformedResult);

    return transformedResult;
  }
}

const catalogTransformer = new CatalogTransformer();

export default catalogTransformer;

export { CatalogTransformer };
