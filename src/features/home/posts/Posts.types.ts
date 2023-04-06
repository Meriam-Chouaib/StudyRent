export interface PostsProps {
  page: number;
  rowsPerPage: number;
  filter?: Filter;
  color?: string;
  padding?: string;
  margin?: string;
  withButton?: boolean;
  withPagination?: boolean;
}
export interface Filter {
  arg: string;
  value: string;
}
