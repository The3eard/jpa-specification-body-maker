import { JpaFilter } from './interfaces/jpa-filter';
import { JpaSort } from './interfaces/jpa-sort';
import { SearchRequest } from './interfaces/search-request';

export class SearchRequestService  {

  public createSearchRequest(): SearchRequest {
    return {
      filters: [],
      sorts: [],
      page: null,
      size: null,
    };
  }

  public createFilter(
    key: string,
    operator: 'EQUAL' | 'NOT_EQUAL' | 'LIKE' | 'IN' | 'BETWEEN',
    field_type:
      | 'BOOLEAN'
      | 'CHAR'
      | 'DATE'
      | 'DOUBLE'
      | 'INTEGER'
      | 'LONG'
      | 'STRING',
    or_conjuction: boolean,
    value?: string | number,
    values?: string[]
  ): JpaFilter {
    return {
      key: key,
      operator: operator,
      field_type: field_type,
      or_conjuction: or_conjuction,
      value: value,
      values: values,
    };
  }

  public createSort(key: string, direction: 'ASC' | 'DESC'): JpaSort {
    return { key: key, direction: direction };
  }

  public transformToUrlParam(request: SearchRequest): string {
    let url = JSON.stringify(request);
    url = url.replaceAll('[', '%5B');
    url = url.replaceAll(']', '%5D');
    url = url.replaceAll('{', '%7B');
    url = url.replaceAll('}', '%7D');
    return url;
  }
}
