import IconDelete from '../../../assets/icons/ic_delete';
import IconEdit from '../../../assets/icons/ic_edit';
import { BoxEditDeleteStyled } from './BoxEditDelete.styles';
import { BoxEditDeleteProps } from './BoxEditDelete.types';
import { BoxIcon } from './BoxIcon';

export const BoxEditDelete = ({ handleDelete, handleEdit }: BoxEditDeleteProps) => {
  return (
    <>
      <BoxEditDeleteStyled>
        <BoxIcon handleSubmit={handleEdit}>
          <IconEdit isActive={false}></IconEdit>
        </BoxIcon>
        <BoxIcon handleSubmit={handleDelete}>
          <IconDelete isActive={false}></IconDelete>
        </BoxIcon>
      </BoxEditDeleteStyled>
    </>
  );
};
