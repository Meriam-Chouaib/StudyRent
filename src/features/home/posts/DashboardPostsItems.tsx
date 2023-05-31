import { Stack } from '@mui/material';
import { BoxEditDelete } from '../../../components/CardPost/BoxEditDelete/BoxEditDelete';
import { ItemDashboard } from '../../../components/ItemDashboard/ItemDashboard';
import { Post } from '../../../redux/api/post/post.types';
import { getDefaultImagePath } from '../../../utils/getDefaultImage';

interface DashboardItemsProps {
  dataPosts?: Post[];
  //   txt_1: string;
  //   txt_2: string;
  //   img: string;
  heightImg: string;
  widthImg: string;
  //   handleDelete: () => void;
  //   handleEdit: () => void;
}
export const DashboardItems = ({
  dataPosts,
  heightImg,
  widthImg,
}: //   handleDelete,
//   handleEdit,
//   img,
//   txt_1,
//   txt_2,
DashboardItemsProps) => (
  <Stack sx={{ padding: '1.3rem 0px' }} spacing={2} direction="column">
    {dataPosts?.map((post: Post) => (
      <ItemDashboard
        key={post.id}
        img={getDefaultImagePath(post.images)}
        txt_1={post.title}
        txt_2={post.description}
        btns={
          <BoxEditDelete
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            idPost={post.id}
            bgColor="white"
            isStudents={true}
            idUser={post.posterId}
            isPosts={true}
          />
        }
        heightImg={heightImg}
        widthImg={widthImg}
        isPost={true}
      />
    ))}
  </Stack>
);
function handleDelete(): void {
  throw new Error('Function not implemented.');
}

function handleEdit(): void {
  throw new Error('Function not implemented.');
}
