import { sendUnaryData, ServerUnaryCall, status } from 'grpc';
import { CatalogService, ICatalogServer } from '../../protos/catalog_grpc_pb';
import {
  Empty,
  CatalogResponse,
  GetCatalogRequest,
  CatalogListResponse,
  CatalogRequest,
  MetaDataInfo,
  CatalogDetailListResponse,
  CatalogDetailRequest,
  CatalogDetailResponse,
} from '../../protos/catalog_pb';
import { catalogService } from '../services';
import { commonTransformer, catalogTransformer } from '../transformers';
import { errorHandler } from '../../utils';

class CatalogHandler implements ICatalogServer {
  public async getCatalogList(call: ServerUnaryCall<Empty>, callback: sendUnaryData<CatalogListResponse>) {
    try {
      const catalogs = await catalogService.getcatalogList();
      return callback(null, catalogTransformer.getCatalogListTransformer(catalogs));
    } catch (error) {
      return callback(errorHandler(call, 'ERROR: GetCatalogList', status.INTERNAL, null, error), null);
    }
  }

  public async getCatalogById(call: ServerUnaryCall<GetCatalogRequest>, callback: sendUnaryData<CatalogResponse>) {
    try {
      const id = call.request.getId();
      const catalog = await catalogService.getCatalogById(id);
      return callback(null, catalogTransformer.getCatalogTransformer(catalog));
    } catch (error) {
      return callback(errorHandler(call, 'ERROR: GetCatalogById', status.INTERNAL, null, error), null);
    }
  }

  public async createCatalog(call: ServerUnaryCall<CatalogRequest>, callback: sendUnaryData<CatalogResponse>) {
    try {
      const catalogInput = catalogTransformer.createCatalogTransformer(call.request);
      const catalog = await catalogService.createCatalog(catalogInput);
      return callback(null, catalogTransformer.getCatalogTransformer(catalog));
    } catch (error) {
      return callback(errorHandler(call, 'ERROR: CreateCatalog', status.INTERNAL, null, error), null);
    }
  }

  public async updateCatalog(call: ServerUnaryCall<CatalogRequest>, callback: sendUnaryData<CatalogResponse>) {
    try {
      const catalogInput = catalogTransformer.createCatalogTransformer(call.request);
      const catalog = await catalogService.udpateCatalog(catalogInput);
      return callback(null, catalogTransformer.getCatalogTransformer(catalog));
    } catch (error) {
      return callback(errorHandler(call, 'ERROR: UpdateCatalog', status.INTERNAL, null, error), null);
    }
  }

  public async deleteCatalog(call: ServerUnaryCall<GetCatalogRequest>, callback: sendUnaryData<CatalogResponse>) {
    try {
      const id = call.request.getId();
      const catalog = await catalogService.deleteCatalog(id);
      return callback(null, catalogTransformer.getCatalogTransformer(catalog));
    } catch (error) {
      return callback(errorHandler(call, 'ERROR: DeleteCatalog', status.INTERNAL, null, error), null);
    }
  }

  public async getCatalogDetailList(call: ServerUnaryCall<MetaDataInfo>, callback: sendUnaryData<CatalogDetailListResponse>) {
    try {
      const metaDataInfo = commonTransformer.getMetaDataTransformer(call.request);
      const catalogDetails = await catalogService.getcatalogDetailList(metaDataInfo);
      return callback(null, catalogTransformer.getCatalogDetailListTransformer(catalogDetails));
    } catch (error) {
      return callback(errorHandler(call, 'ERROR: GetCatalogDetailList', status.INTERNAL, null, error), null);
    }
  }

  public async createCatalogDetail(call: ServerUnaryCall<CatalogDetailRequest>, callback: sendUnaryData<CatalogDetailResponse>) {
    try {
      const catalogDetailInput = catalogTransformer.createCatalogDetailTransformer(call.request);
      const catalogDetail = await catalogService.createCatalogDetail(catalogDetailInput);
      return callback(null, catalogTransformer.getCatalogDetailTransformer(catalogDetail));
    } catch (error) {
      return callback(errorHandler(call, 'ERROR: CreateCatalogDetail', status.INTERNAL, null, error), null);
    }
  }

  public async updateCatalogDetail(call: ServerUnaryCall<CatalogDetailRequest>, callback: sendUnaryData<CatalogDetailResponse>) {
    try {
      const catalogDetailInput = catalogTransformer.createCatalogDetailTransformer(call.request);
      const catalogDetail = await catalogService.udpateCatalogDetail(catalogDetailInput);
      return callback(null, catalogTransformer.getCatalogDetailTransformer(catalogDetail));
    } catch (error) {
      return callback(errorHandler(call, 'ERROR: UpdateCatalogDetail', status.INTERNAL, null, error), null);
    }
  }

  public async deleteCatalogDetail(call: ServerUnaryCall<GetCatalogRequest>, callback: sendUnaryData<CatalogDetailResponse>) {
    try {
      const id = call.request.getId();
      const catalogDetail = await catalogService.deleteCatalogDetail(id);
      return callback(null, catalogTransformer.getCatalogDetailTransformer(catalogDetail));
    } catch (error) {
      return callback(errorHandler(call, 'ERROR: DeleteCatalogDetail', status.INTERNAL, null, error), null);
    }
  }
}

const catalogHandler = new CatalogHandler();

export { catalogHandler, CatalogService };
