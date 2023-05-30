export interface BoxEditDeleteProps {
  handleDelete: () => void;
  handleEdit: () => void;
  handleFavorite?: () => void;
  handleComment?: () => void;
  isPoster?: boolean;
  idPost: number;
  isFavorite?: boolean;
  bgColor?: string;
  isStudents?: boolean;
  isOwners?: boolean;
  isPosts?: boolean;
  idUser?: number;
}
