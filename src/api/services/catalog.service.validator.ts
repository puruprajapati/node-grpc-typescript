import { Catalog, CatalogDetail } from '../models';
import { ICatalogRequest, ICatalogDetailRequest } from '../interface';
import { CustomError } from '../../utils';

const validateCatalogId = (id: string) => {
  if (!id) {
    throw new CustomError('Id is required');
  }
};

const validateCreateCatalog = async (input: ICatalogRequest) => {
  if (!input.hasOwnProperty('title')) {
    throw new CustomError('Title is required');
  }
  if (await Catalog.query().where('title', input.title).first()) {
    throw new CustomError('Catalog already created with same name');
  }
  if (input.hasOwnProperty('parent_catalog_id')) {
    if (!(await Catalog.query().findById(input.parent_catalog_id))) {
      throw new CustomError('Invalid parent');
    }
  }
};

const validateUpdateCatalog = async (input: ICatalogRequest) => {
  if (!input.hasOwnProperty('id')) {
    throw new CustomError('Id is required');
  }
  if (!input.hasOwnProperty('title')) {
    throw new CustomError('Title is required');
  }
  if (await Catalog.query().where('title', input.title).where('id', '!=', input.id).first()) {
    throw new CustomError('Catalog already created with same name');
  }
  if (input.hasOwnProperty('parent_catalog_id')) {
    if (!(await Catalog.query().findById(input.parent_catalog_id))) {
      throw new CustomError('Invalid parent');
    }
  }
};

const validateCreateCatalogDetail = async (input: ICatalogDetailRequest) => {
  if (!input.hasOwnProperty('catalog_id')) {
    throw new CustomError('Catalog is required');
  } else {
    if (!(await Catalog.query().findById(input.catalog_id))) {
      throw new CustomError('Invalid catalog');
    }
  }
  if (input.hasOwnProperty('parent_catalog_detail_id')) {
    if (!(await CatalogDetail.query().findById(input.parent_catalog_detail_id))) {
      throw new CustomError('Invalid parent');
    }
  }
};

const validateUpdateCatalogDetail = async (input: ICatalogDetailRequest) => {
  if (!input.hasOwnProperty('id')) {
    throw new CustomError('Id is required');
  }
  if (!input.hasOwnProperty('catalog_id')) {
    throw new CustomError('Catalog is required');
  } else {
    if (!(await Catalog.query().findById(input.catalog_id))) {
      throw new CustomError('Invalid catalog');
    }
  }
  if (input.hasOwnProperty('parent_catalog_detail_id')) {
    if (!(await CatalogDetail.query().findById(input.parent_catalog_detail_id))) {
      throw new CustomError('Invalid parent');
    }
  }
};

const validateCatalogDetailId = (id: string) => {
  if (!id) {
    throw new CustomError('Id is required');
  }
};

export {
  validateCreateCatalog,
  validateCatalogId,
  validateUpdateCatalog,
  validateCreateCatalogDetail,
  validateUpdateCatalogDetail,
  validateCatalogDetailId,
};
