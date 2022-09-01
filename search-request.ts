import {JpaFilter} from './jpa-filter';
import {JpaSort} from './jpa-sort';

export interface SearchRequest {
  filters: JpaFilter[];
  sorts: JpaSort[];
  page: number | null;
  size: number | null;
}
