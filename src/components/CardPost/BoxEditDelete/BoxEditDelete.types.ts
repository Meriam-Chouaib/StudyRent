export interface BoxEditDeleteProps {
  handleDelete: () => void;
  handleEdit: () => void;
  handleFavorite: () => void;
  handleComment: () => void;
  isPoster?: boolean;
  idPost: number;
  isFavorite?: boolean;
}
