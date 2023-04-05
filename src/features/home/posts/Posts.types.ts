export interface PostsProps {
  page: number;
  rowsPerPage: number;
  filter?: Filter;
  color?: string;
}
export interface Filter {
  arg: string;
  value: string;
}
