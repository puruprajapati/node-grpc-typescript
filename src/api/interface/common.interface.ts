export interface IMetadataInfo {
  searchText: string;
  fiterAttributes: IFilterAttribute[];
  sortAttributes: ISortAttribute[];
}

export interface IFilterAttribute {
  filterBy: string;
  value: string;
}

export interface ISortAttribute {
  orderBy: string;
  order: string;
}
