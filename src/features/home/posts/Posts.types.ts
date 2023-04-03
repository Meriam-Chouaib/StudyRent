export interface PostsProps {
  page: number;
  rowsPerPage: number;
  filter?: Filter;
}
export interface Filter {
  arg: string;
  value: string;
}
