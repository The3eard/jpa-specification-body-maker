export interface JpaFilter {
  key: string;
  operator: 'EQUAL' | 'NOT_EQUAL' | 'LIKE' | 'IN' | 'BETWEEN';
  field_type: 'BOOLEAN' | 'CHAR' | 'DATE' | 'DOUBLE' | 'INTEGER' | 'LONG' | 'STRING';
  or_conjuction: boolean;
  value?: string | number;
  values?: string[];
  value_to?: 'BOOLEAN' | 'CHAR' | 'DATE' | 'DOUBLE' | 'INTEGER' | 'LONG' | 'STRING';
}
