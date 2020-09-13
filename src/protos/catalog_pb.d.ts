// package: catalogservice
// file: catalog.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class GetCatalogRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetCatalogRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCatalogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCatalogRequest): GetCatalogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCatalogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCatalogRequest;
    static deserializeBinaryFromReader(message: GetCatalogRequest, reader: jspb.BinaryReader): GetCatalogRequest;
}

export namespace GetCatalogRequest {
    export type AsObject = {
        id: string,
    }
}

export class CatalogListResponse extends jspb.Message { 
    clearCatalogsList(): void;
    getCatalogsList(): Array<CatalogResponse>;
    setCatalogsList(value: Array<CatalogResponse>): CatalogListResponse;
    addCatalogs(value?: CatalogResponse, index?: number): CatalogResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CatalogListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CatalogListResponse): CatalogListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CatalogListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CatalogListResponse;
    static deserializeBinaryFromReader(message: CatalogListResponse, reader: jspb.BinaryReader): CatalogListResponse;
}

export namespace CatalogListResponse {
    export type AsObject = {
        catalogsList: Array<CatalogResponse.AsObject>,
    }
}

export class CatalogResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): CatalogResponse;

    getTitle(): string;
    setTitle(value: string): CatalogResponse;

    getParentCatalogId(): string;
    setParentCatalogId(value: string): CatalogResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CatalogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CatalogResponse): CatalogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CatalogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CatalogResponse;
    static deserializeBinaryFromReader(message: CatalogResponse, reader: jspb.BinaryReader): CatalogResponse;
}

export namespace CatalogResponse {
    export type AsObject = {
        id: string,
        title: string,
        parentCatalogId: string,
    }
}

export class CatalogRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): CatalogRequest;

    getTitle(): string;
    setTitle(value: string): CatalogRequest;

    getParentCatalogId(): string;
    setParentCatalogId(value: string): CatalogRequest;

    getActive(): boolean;
    setActive(value: boolean): CatalogRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CatalogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CatalogRequest): CatalogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CatalogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CatalogRequest;
    static deserializeBinaryFromReader(message: CatalogRequest, reader: jspb.BinaryReader): CatalogRequest;
}

export namespace CatalogRequest {
    export type AsObject = {
        id: string,
        title: string,
        parentCatalogId: string,
        active: boolean,
    }
}

export class CatalogDetailListResponse extends jspb.Message { 
    clearCatalogDetailsList(): void;
    getCatalogDetailsList(): Array<CatalogDetailResponse>;
    setCatalogDetailsList(value: Array<CatalogDetailResponse>): CatalogDetailListResponse;
    addCatalogDetails(value?: CatalogDetailResponse, index?: number): CatalogDetailResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CatalogDetailListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CatalogDetailListResponse): CatalogDetailListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CatalogDetailListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CatalogDetailListResponse;
    static deserializeBinaryFromReader(message: CatalogDetailListResponse, reader: jspb.BinaryReader): CatalogDetailListResponse;
}

export namespace CatalogDetailListResponse {
    export type AsObject = {
        catalogDetailsList: Array<CatalogDetailResponse.AsObject>,
    }
}

export class CatalogDetailResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): CatalogDetailResponse;

    getTitle(): string;
    setTitle(value: string): CatalogDetailResponse;

    getParentCatalogDetailId(): string;
    setParentCatalogDetailId(value: string): CatalogDetailResponse;

    getParentCatalogDetailTitle(): string;
    setParentCatalogDetailTitle(value: string): CatalogDetailResponse;

    getCatalogId(): string;
    setCatalogId(value: string): CatalogDetailResponse;

    getCatalogTitle(): string;
    setCatalogTitle(value: string): CatalogDetailResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CatalogDetailResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CatalogDetailResponse): CatalogDetailResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CatalogDetailResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CatalogDetailResponse;
    static deserializeBinaryFromReader(message: CatalogDetailResponse, reader: jspb.BinaryReader): CatalogDetailResponse;
}

export namespace CatalogDetailResponse {
    export type AsObject = {
        id: string,
        title: string,
        parentCatalogDetailId: string,
        parentCatalogDetailTitle: string,
        catalogId: string,
        catalogTitle: string,
    }
}

export class CatalogDetailRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): CatalogDetailRequest;

    getTitle(): string;
    setTitle(value: string): CatalogDetailRequest;

    getCatalogId(): string;
    setCatalogId(value: string): CatalogDetailRequest;

    getParentCatalogDetailId(): string;
    setParentCatalogDetailId(value: string): CatalogDetailRequest;

    getActive(): boolean;
    setActive(value: boolean): CatalogDetailRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CatalogDetailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CatalogDetailRequest): CatalogDetailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CatalogDetailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CatalogDetailRequest;
    static deserializeBinaryFromReader(message: CatalogDetailRequest, reader: jspb.BinaryReader): CatalogDetailRequest;
}

export namespace CatalogDetailRequest {
    export type AsObject = {
        id: string,
        title: string,
        catalogId: string,
        parentCatalogDetailId: string,
        active: boolean,
    }
}

export class Filter extends jspb.Message { 
    getFilterBy(): string;
    setFilterBy(value: string): Filter;

    getValue(): string;
    setValue(value: string): Filter;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
    export type AsObject = {
        filterBy: string,
        value: string,
    }
}

export class Sort extends jspb.Message { 
    getOrderBy(): string;
    setOrderBy(value: string): Sort;

    getOrder(): string;
    setOrder(value: string): Sort;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sort.AsObject;
    static toObject(includeInstance: boolean, msg: Sort): Sort.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sort, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sort;
    static deserializeBinaryFromReader(message: Sort, reader: jspb.BinaryReader): Sort;
}

export namespace Sort {
    export type AsObject = {
        orderBy: string,
        order: string,
    }
}

export class MetaDataInfo extends jspb.Message { 
    clearFiltersList(): void;
    getFiltersList(): Array<Filter>;
    setFiltersList(value: Array<Filter>): MetaDataInfo;
    addFilters(value?: Filter, index?: number): Filter;

    clearSortsList(): void;
    getSortsList(): Array<Sort>;
    setSortsList(value: Array<Sort>): MetaDataInfo;
    addSorts(value?: Sort, index?: number): Sort;

    getSearchText(): string;
    setSearchText(value: string): MetaDataInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetaDataInfo.AsObject;
    static toObject(includeInstance: boolean, msg: MetaDataInfo): MetaDataInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetaDataInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetaDataInfo;
    static deserializeBinaryFromReader(message: MetaDataInfo, reader: jspb.BinaryReader): MetaDataInfo;
}

export namespace MetaDataInfo {
    export type AsObject = {
        filtersList: Array<Filter.AsObject>,
        sortsList: Array<Sort.AsObject>,
        searchText: string,
    }
}
