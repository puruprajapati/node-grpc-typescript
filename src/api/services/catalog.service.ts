import { Catalog, CatalogDetail } from '../models';
import { ICatalogRequest, IMetadataInfo, ICatalogDetailRequest } from '../interface';
import {
  validateCatalogDetailId,
  validateCreateCatalog,
  validateCatalogId,
  validateUpdateCatalog,
  validateCreateCatalogDetail,
  validateUpdateCatalogDetail,
} from './catalog.service.validator';

class CatalogService {
  async getcatalogList() {
    return Catalog.query()
      .then((catalogs) => catalogs)
      .catch((err) => {
        throw err;
      });
  }

  async getCatalogById(id: string) {
    try {
      await validateCatalogId(id);
      return Catalog.query()
        .findById(id)
        .throwIfNotFound({
          message: 'Catalog not found',
          type: 'CustomError',
        })
        .then((catalog) => catalog);
    } catch (error) {
      throw error;
    }
  }

  async createCatalog(input: ICatalogRequest) {
    try {
      await validateCreateCatalog(input);
      return Catalog.query().insertAndFetch(input);
    } catch (error) {
      throw error;
    }
  }

  async udpateCatalog(input: ICatalogRequest) {
    try {
      await validateUpdateCatalog(input);
      return Catalog.query()
        .patchAndFetchById(input.id, input)
        .throwIfNotFound({
          message: 'Catalog not found',
          type: 'CustomError',
        })
        .then((catalog) => catalog);
    } catch (error) {
      throw error;
    }
  }

  async deleteCatalog(id: string) {
    try {
      const result = await this.getCatalogById(id);
      await Catalog.query().deleteById(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getcatalogDetailList(input: IMetadataInfo) {
    let builder = CatalogDetail.query().mergeEager('Catalog').mergeEager('ParentCatalogDetail');
    if (input) {
      //pprajapati: need to add validation for metadata object
      if (input.fiterAttributes && input.fiterAttributes.length > 0) {
        input.fiterAttributes.forEach((filter) => {
          builder = builder.where(filter.filterBy, '=', filter.value);
        });
      }
      if (input.sortAttributes && input.sortAttributes.length > 0) {
        input.sortAttributes.forEach((sort) => {
          builder = builder.orderBy(sort.orderBy, sort.order === 'DESC' ? 'DESC' : 'ASC');
        });
      }
    }
    return builder
      .then((catalogs) => catalogs)
      .catch((err) => {
        throw err;
      });
  }

  async createCatalogDetail(input: ICatalogDetailRequest) {
    try {
      await validateCreateCatalogDetail(input);
      return CatalogDetail.query().insertAndFetch(input).mergeEager('Catalog').mergeEager('ParentCatalogDetail');
    } catch (error) {
      throw error;
    }
  }

  async udpateCatalogDetail(input: ICatalogDetailRequest) {
    try {
      await validateUpdateCatalogDetail(input);
      return CatalogDetail.query()
        .patchAndFetchById(input.id, input)
        .mergeEager('Catalog')
        .mergeEager('ParentCatalogDetail')
        .throwIfNotFound({
          message: 'Catalog Detail not found',
          type: 'CustomError',
        })
        .then((catalog) => catalog);
    } catch (error) {
      throw error;
    }
  }

  async getCatalogDetailById(id: string) {
    try {
      await validateCatalogDetailId(id);
      return CatalogDetail.query()
        .findById(id)
        .throwIfNotFound({
          message: 'Catalog Detail not found',
          type: 'CustomError',
        })
        .then((catalog) => catalog);
    } catch (error) {
      throw error;
    }
  }

  async deleteCatalogDetail(id: string) {
    try {
      const result = await this.getCatalogDetailById(id);
      await CatalogDetail.query().deleteById(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

const catalogService = new CatalogService();

export { CatalogService };

export default catalogService;
