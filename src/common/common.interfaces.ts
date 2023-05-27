export interface Paginator {
  page: number;
  rowsPerPage: number;
  filter?: string;
  idStudent?: number;
  idOwner?: number;
  universityAddress?: string;
}
