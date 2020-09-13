// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var catalog_pb = require('./catalog_pb.js');

function serialize_catalogservice_CatalogDetailListResponse(arg) {
  if (!(arg instanceof catalog_pb.CatalogDetailListResponse)) {
    throw new Error('Expected argument of type catalogservice.CatalogDetailListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_catalogservice_CatalogDetailListResponse(buffer_arg) {
  return catalog_pb.CatalogDetailListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_catalogservice_CatalogDetailRequest(arg) {
  if (!(arg instanceof catalog_pb.CatalogDetailRequest)) {
    throw new Error('Expected argument of type catalogservice.CatalogDetailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_catalogservice_CatalogDetailRequest(buffer_arg) {
  return catalog_pb.CatalogDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_catalogservice_CatalogDetailResponse(arg) {
  if (!(arg instanceof catalog_pb.CatalogDetailResponse)) {
    throw new Error('Expected argument of type catalogservice.CatalogDetailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_catalogservice_CatalogDetailResponse(buffer_arg) {
  return catalog_pb.CatalogDetailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_catalogservice_CatalogListResponse(arg) {
  if (!(arg instanceof catalog_pb.CatalogListResponse)) {
    throw new Error('Expected argument of type catalogservice.CatalogListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_catalogservice_CatalogListResponse(buffer_arg) {
  return catalog_pb.CatalogListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_catalogservice_CatalogRequest(arg) {
  if (!(arg instanceof catalog_pb.CatalogRequest)) {
    throw new Error('Expected argument of type catalogservice.CatalogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_catalogservice_CatalogRequest(buffer_arg) {
  return catalog_pb.CatalogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_catalogservice_CatalogResponse(arg) {
  if (!(arg instanceof catalog_pb.CatalogResponse)) {
    throw new Error('Expected argument of type catalogservice.CatalogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_catalogservice_CatalogResponse(buffer_arg) {
  return catalog_pb.CatalogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_catalogservice_Empty(arg) {
  if (!(arg instanceof catalog_pb.Empty)) {
    throw new Error('Expected argument of type catalogservice.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_catalogservice_Empty(buffer_arg) {
  return catalog_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_catalogservice_GetCatalogRequest(arg) {
  if (!(arg instanceof catalog_pb.GetCatalogRequest)) {
    throw new Error('Expected argument of type catalogservice.GetCatalogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_catalogservice_GetCatalogRequest(buffer_arg) {
  return catalog_pb.GetCatalogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_catalogservice_MetaDataInfo(arg) {
  if (!(arg instanceof catalog_pb.MetaDataInfo)) {
    throw new Error('Expected argument of type catalogservice.MetaDataInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_catalogservice_MetaDataInfo(buffer_arg) {
  return catalog_pb.MetaDataInfo.deserializeBinary(new Uint8Array(buffer_arg));
}


var CatalogService = exports.CatalogService = {
  getCatalogList: {
    path: '/catalogservice.Catalog/getCatalogList',
    requestStream: false,
    responseStream: false,
    requestType: catalog_pb.Empty,
    responseType: catalog_pb.CatalogListResponse,
    requestSerialize: serialize_catalogservice_Empty,
    requestDeserialize: deserialize_catalogservice_Empty,
    responseSerialize: serialize_catalogservice_CatalogListResponse,
    responseDeserialize: deserialize_catalogservice_CatalogListResponse,
  },
  getCatalogById: {
    path: '/catalogservice.Catalog/getCatalogById',
    requestStream: false,
    responseStream: false,
    requestType: catalog_pb.GetCatalogRequest,
    responseType: catalog_pb.CatalogResponse,
    requestSerialize: serialize_catalogservice_GetCatalogRequest,
    requestDeserialize: deserialize_catalogservice_GetCatalogRequest,
    responseSerialize: serialize_catalogservice_CatalogResponse,
    responseDeserialize: deserialize_catalogservice_CatalogResponse,
  },
  createCatalog: {
    path: '/catalogservice.Catalog/createCatalog',
    requestStream: false,
    responseStream: false,
    requestType: catalog_pb.CatalogRequest,
    responseType: catalog_pb.CatalogResponse,
    requestSerialize: serialize_catalogservice_CatalogRequest,
    requestDeserialize: deserialize_catalogservice_CatalogRequest,
    responseSerialize: serialize_catalogservice_CatalogResponse,
    responseDeserialize: deserialize_catalogservice_CatalogResponse,
  },
  updateCatalog: {
    path: '/catalogservice.Catalog/updateCatalog',
    requestStream: false,
    responseStream: false,
    requestType: catalog_pb.CatalogRequest,
    responseType: catalog_pb.CatalogResponse,
    requestSerialize: serialize_catalogservice_CatalogRequest,
    requestDeserialize: deserialize_catalogservice_CatalogRequest,
    responseSerialize: serialize_catalogservice_CatalogResponse,
    responseDeserialize: deserialize_catalogservice_CatalogResponse,
  },
  deleteCatalog: {
    path: '/catalogservice.Catalog/deleteCatalog',
    requestStream: false,
    responseStream: false,
    requestType: catalog_pb.GetCatalogRequest,
    responseType: catalog_pb.CatalogResponse,
    requestSerialize: serialize_catalogservice_GetCatalogRequest,
    requestDeserialize: deserialize_catalogservice_GetCatalogRequest,
    responseSerialize: serialize_catalogservice_CatalogResponse,
    responseDeserialize: deserialize_catalogservice_CatalogResponse,
  },
  getCatalogDetailList: {
    path: '/catalogservice.Catalog/getCatalogDetailList',
    requestStream: false,
    responseStream: false,
    requestType: catalog_pb.MetaDataInfo,
    responseType: catalog_pb.CatalogDetailListResponse,
    requestSerialize: serialize_catalogservice_MetaDataInfo,
    requestDeserialize: deserialize_catalogservice_MetaDataInfo,
    responseSerialize: serialize_catalogservice_CatalogDetailListResponse,
    responseDeserialize: deserialize_catalogservice_CatalogDetailListResponse,
  },
  createCatalogDetail: {
    path: '/catalogservice.Catalog/createCatalogDetail',
    requestStream: false,
    responseStream: false,
    requestType: catalog_pb.CatalogDetailRequest,
    responseType: catalog_pb.CatalogDetailResponse,
    requestSerialize: serialize_catalogservice_CatalogDetailRequest,
    requestDeserialize: deserialize_catalogservice_CatalogDetailRequest,
    responseSerialize: serialize_catalogservice_CatalogDetailResponse,
    responseDeserialize: deserialize_catalogservice_CatalogDetailResponse,
  },
  updateCatalogDetail: {
    path: '/catalogservice.Catalog/updateCatalogDetail',
    requestStream: false,
    responseStream: false,
    requestType: catalog_pb.CatalogDetailRequest,
    responseType: catalog_pb.CatalogDetailResponse,
    requestSerialize: serialize_catalogservice_CatalogDetailRequest,
    requestDeserialize: deserialize_catalogservice_CatalogDetailRequest,
    responseSerialize: serialize_catalogservice_CatalogDetailResponse,
    responseDeserialize: deserialize_catalogservice_CatalogDetailResponse,
  },
  deleteCatalogDetail: {
    path: '/catalogservice.Catalog/deleteCatalogDetail',
    requestStream: false,
    responseStream: false,
    requestType: catalog_pb.GetCatalogRequest,
    responseType: catalog_pb.CatalogDetailResponse,
    requestSerialize: serialize_catalogservice_GetCatalogRequest,
    requestDeserialize: deserialize_catalogservice_GetCatalogRequest,
    responseSerialize: serialize_catalogservice_CatalogDetailResponse,
    responseDeserialize: deserialize_catalogservice_CatalogDetailResponse,
  },
};

exports.CatalogClient = grpc.makeGenericClientConstructor(CatalogService);
