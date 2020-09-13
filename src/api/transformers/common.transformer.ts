import { MetaDataInfo } from '../../protos/catalog_pb';
import { IMetadataInfo } from '../interface';
import { deleteNullElementFromObject } from '../../utils/object';

class CommonTransformer {
  getMetaDataTransformer(input: MetaDataInfo): IMetadataInfo {
    let tempObject: any = input.toObject();
    let transformedResult: IMetadataInfo = {
      searchText: input.getSearchText(),
      fiterAttributes: [],
      sortAttributes: [],
    };

    if (tempObject.hasOwnProperty('filtersList')) {
      tempObject.filtersList.forEach((filterElement) => {
        transformedResult.fiterAttributes.push({
          filterBy: filterElement.filterBy,
          value: filterElement.value,
        });
      });
    }

    if (tempObject.hasOwnProperty('sortsList')) {
      tempObject.sortsList.forEach((sortElement) => {
        transformedResult.sortAttributes.push({
          orderBy: sortElement.orderBy,
          order: sortElement.order,
        });
      });
    }

    deleteNullElementFromObject(transformedResult);

    return transformedResult;
  }
}

const commonTransformer = new CommonTransformer();

export default commonTransformer;

export { CommonTransformer };
