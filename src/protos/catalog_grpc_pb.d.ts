// package: catalogservice
// file: catalog.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as catalog_pb from "./catalog_pb";

interface ICatalogService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getCatalogList: ICatalogService_IgetCatalogList;
    getCatalogById: ICatalogService_IgetCatalogById;
    createCatalog: ICatalogService_IcreateCatalog;
    updateCatalog: ICatalogService_IupdateCatalog;
    deleteCatalog: ICatalogService_IdeleteCatalog;
    getCatalogDetailList: ICatalogService_IgetCatalogDetailList;
    createCatalogDetail: ICatalogService_IcreateCatalogDetail;
    updateCatalogDetail: ICatalogService_IupdateCatalogDetail;
    deleteCatalogDetail: ICatalogService_IdeleteCatalogDetail;
}

interface ICatalogService_IgetCatalogList extends grpc.MethodDefinition<catalog_pb.Empty, catalog_pb.CatalogListResponse> {
    path: string; // "/catalogservice.Catalog/getCatalogList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catalog_pb.Empty>;
    requestDeserialize: grpc.deserialize<catalog_pb.Empty>;
    responseSerialize: grpc.serialize<catalog_pb.CatalogListResponse>;
    responseDeserialize: grpc.deserialize<catalog_pb.CatalogListResponse>;
}
interface ICatalogService_IgetCatalogById extends grpc.MethodDefinition<catalog_pb.GetCatalogRequest, catalog_pb.CatalogResponse> {
    path: string; // "/catalogservice.Catalog/getCatalogById"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catalog_pb.GetCatalogRequest>;
    requestDeserialize: grpc.deserialize<catalog_pb.GetCatalogRequest>;
    responseSerialize: grpc.serialize<catalog_pb.CatalogResponse>;
    responseDeserialize: grpc.deserialize<catalog_pb.CatalogResponse>;
}
interface ICatalogService_IcreateCatalog extends grpc.MethodDefinition<catalog_pb.CatalogRequest, catalog_pb.CatalogResponse> {
    path: string; // "/catalogservice.Catalog/createCatalog"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catalog_pb.CatalogRequest>;
    requestDeserialize: grpc.deserialize<catalog_pb.CatalogRequest>;
    responseSerialize: grpc.serialize<catalog_pb.CatalogResponse>;
    responseDeserialize: grpc.deserialize<catalog_pb.CatalogResponse>;
}
interface ICatalogService_IupdateCatalog extends grpc.MethodDefinition<catalog_pb.CatalogRequest, catalog_pb.CatalogResponse> {
    path: string; // "/catalogservice.Catalog/updateCatalog"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catalog_pb.CatalogRequest>;
    requestDeserialize: grpc.deserialize<catalog_pb.CatalogRequest>;
    responseSerialize: grpc.serialize<catalog_pb.CatalogResponse>;
    responseDeserialize: grpc.deserialize<catalog_pb.CatalogResponse>;
}
interface ICatalogService_IdeleteCatalog extends grpc.MethodDefinition<catalog_pb.GetCatalogRequest, catalog_pb.CatalogResponse> {
    path: string; // "/catalogservice.Catalog/deleteCatalog"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catalog_pb.GetCatalogRequest>;
    requestDeserialize: grpc.deserialize<catalog_pb.GetCatalogRequest>;
    responseSerialize: grpc.serialize<catalog_pb.CatalogResponse>;
    responseDeserialize: grpc.deserialize<catalog_pb.CatalogResponse>;
}
interface ICatalogService_IgetCatalogDetailList extends grpc.MethodDefinition<catalog_pb.MetaDataInfo, catalog_pb.CatalogDetailListResponse> {
    path: string; // "/catalogservice.Catalog/getCatalogDetailList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catalog_pb.MetaDataInfo>;
    requestDeserialize: grpc.deserialize<catalog_pb.MetaDataInfo>;
    responseSerialize: grpc.serialize<catalog_pb.CatalogDetailListResponse>;
    responseDeserialize: grpc.deserialize<catalog_pb.CatalogDetailListResponse>;
}
interface ICatalogService_IcreateCatalogDetail extends grpc.MethodDefinition<catalog_pb.CatalogDetailRequest, catalog_pb.CatalogDetailResponse> {
    path: string; // "/catalogservice.Catalog/createCatalogDetail"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catalog_pb.CatalogDetailRequest>;
    requestDeserialize: grpc.deserialize<catalog_pb.CatalogDetailRequest>;
    responseSerialize: grpc.serialize<catalog_pb.CatalogDetailResponse>;
    responseDeserialize: grpc.deserialize<catalog_pb.CatalogDetailResponse>;
}
interface ICatalogService_IupdateCatalogDetail extends grpc.MethodDefinition<catalog_pb.CatalogDetailRequest, catalog_pb.CatalogDetailResponse> {
    path: string; // "/catalogservice.Catalog/updateCatalogDetail"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catalog_pb.CatalogDetailRequest>;
    requestDeserialize: grpc.deserialize<catalog_pb.CatalogDetailRequest>;
    responseSerialize: grpc.serialize<catalog_pb.CatalogDetailResponse>;
    responseDeserialize: grpc.deserialize<catalog_pb.CatalogDetailResponse>;
}
interface ICatalogService_IdeleteCatalogDetail extends grpc.MethodDefinition<catalog_pb.GetCatalogRequest, catalog_pb.CatalogDetailResponse> {
    path: string; // "/catalogservice.Catalog/deleteCatalogDetail"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catalog_pb.GetCatalogRequest>;
    requestDeserialize: grpc.deserialize<catalog_pb.GetCatalogRequest>;
    responseSerialize: grpc.serialize<catalog_pb.CatalogDetailResponse>;
    responseDeserialize: grpc.deserialize<catalog_pb.CatalogDetailResponse>;
}

export const CatalogService: ICatalogService;

export interface ICatalogServer {
    getCatalogList: grpc.handleUnaryCall<catalog_pb.Empty, catalog_pb.CatalogListResponse>;
    getCatalogById: grpc.handleUnaryCall<catalog_pb.GetCatalogRequest, catalog_pb.CatalogResponse>;
    createCatalog: grpc.handleUnaryCall<catalog_pb.CatalogRequest, catalog_pb.CatalogResponse>;
    updateCatalog: grpc.handleUnaryCall<catalog_pb.CatalogRequest, catalog_pb.CatalogResponse>;
    deleteCatalog: grpc.handleUnaryCall<catalog_pb.GetCatalogRequest, catalog_pb.CatalogResponse>;
    getCatalogDetailList: grpc.handleUnaryCall<catalog_pb.MetaDataInfo, catalog_pb.CatalogDetailListResponse>;
    createCatalogDetail: grpc.handleUnaryCall<catalog_pb.CatalogDetailRequest, catalog_pb.CatalogDetailResponse>;
    updateCatalogDetail: grpc.handleUnaryCall<catalog_pb.CatalogDetailRequest, catalog_pb.CatalogDetailResponse>;
    deleteCatalogDetail: grpc.handleUnaryCall<catalog_pb.GetCatalogRequest, catalog_pb.CatalogDetailResponse>;
}

export interface ICatalogClient {
    getCatalogList(request: catalog_pb.Empty, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogListResponse) => void): grpc.ClientUnaryCall;
    getCatalogList(request: catalog_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogListResponse) => void): grpc.ClientUnaryCall;
    getCatalogList(request: catalog_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogListResponse) => void): grpc.ClientUnaryCall;
    getCatalogById(request: catalog_pb.GetCatalogRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    getCatalogById(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    getCatalogById(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    createCatalog(request: catalog_pb.CatalogRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    createCatalog(request: catalog_pb.CatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    createCatalog(request: catalog_pb.CatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    updateCatalog(request: catalog_pb.CatalogRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    updateCatalog(request: catalog_pb.CatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    updateCatalog(request: catalog_pb.CatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    deleteCatalog(request: catalog_pb.GetCatalogRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    deleteCatalog(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    deleteCatalog(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    getCatalogDetailList(request: catalog_pb.MetaDataInfo, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailListResponse) => void): grpc.ClientUnaryCall;
    getCatalogDetailList(request: catalog_pb.MetaDataInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailListResponse) => void): grpc.ClientUnaryCall;
    getCatalogDetailList(request: catalog_pb.MetaDataInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailListResponse) => void): grpc.ClientUnaryCall;
    createCatalogDetail(request: catalog_pb.CatalogDetailRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    createCatalogDetail(request: catalog_pb.CatalogDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    createCatalogDetail(request: catalog_pb.CatalogDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    updateCatalogDetail(request: catalog_pb.CatalogDetailRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    updateCatalogDetail(request: catalog_pb.CatalogDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    updateCatalogDetail(request: catalog_pb.CatalogDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    deleteCatalogDetail(request: catalog_pb.GetCatalogRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    deleteCatalogDetail(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    deleteCatalogDetail(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
}

export class CatalogClient extends grpc.Client implements ICatalogClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getCatalogList(request: catalog_pb.Empty, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogListResponse) => void): grpc.ClientUnaryCall;
    public getCatalogList(request: catalog_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogListResponse) => void): grpc.ClientUnaryCall;
    public getCatalogList(request: catalog_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogListResponse) => void): grpc.ClientUnaryCall;
    public getCatalogById(request: catalog_pb.GetCatalogRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public getCatalogById(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public getCatalogById(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public createCatalog(request: catalog_pb.CatalogRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public createCatalog(request: catalog_pb.CatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public createCatalog(request: catalog_pb.CatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public updateCatalog(request: catalog_pb.CatalogRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public updateCatalog(request: catalog_pb.CatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public updateCatalog(request: catalog_pb.CatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public deleteCatalog(request: catalog_pb.GetCatalogRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public deleteCatalog(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public deleteCatalog(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogResponse) => void): grpc.ClientUnaryCall;
    public getCatalogDetailList(request: catalog_pb.MetaDataInfo, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailListResponse) => void): grpc.ClientUnaryCall;
    public getCatalogDetailList(request: catalog_pb.MetaDataInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailListResponse) => void): grpc.ClientUnaryCall;
    public getCatalogDetailList(request: catalog_pb.MetaDataInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailListResponse) => void): grpc.ClientUnaryCall;
    public createCatalogDetail(request: catalog_pb.CatalogDetailRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    public createCatalogDetail(request: catalog_pb.CatalogDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    public createCatalogDetail(request: catalog_pb.CatalogDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    public updateCatalogDetail(request: catalog_pb.CatalogDetailRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    public updateCatalogDetail(request: catalog_pb.CatalogDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    public updateCatalogDetail(request: catalog_pb.CatalogDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    public deleteCatalogDetail(request: catalog_pb.GetCatalogRequest, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    public deleteCatalogDetail(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
    public deleteCatalogDetail(request: catalog_pb.GetCatalogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalog_pb.CatalogDetailResponse) => void): grpc.ClientUnaryCall;
}
