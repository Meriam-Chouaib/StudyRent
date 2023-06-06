// ___________________________ mui ________________________________
import { Stack } from '@mui/material';

// ___________________________ components ________________________________
import { BoxEditDelete } from '../../../components/CardPost/BoxEditDelete/BoxEditDelete';
import { ItemDashboard } from '../../../components/ItemDashboard/ItemDashboard';

// ___________________________ utils ________________________________
import { getDefaultImagePath } from '../../../utils/getDefaultImage';
import { getPersistData } from '../../../utils';

// ___________________________ Api ________________________________
import { Post } from '../../../redux/api/post/post.types';

interface DashboardItemsProps {
  dataPosts?: Post[];
  heightImg: string;
  widthImg: string;
}
export const DashboardItems = ({ dataPosts, heightImg, widthImg }: DashboardItemsProps) => {
  const user = getPersistData('user', true);

  return (
    <Stack sx={{ padding: '1.3rem 0px', width: '100%' }} spacing={2} direction="column">
      {dataPosts?.map((post: Post) => {
        return (
          <ItemDashboard
            key={post.id}
            img={getDefaultImagePath(post.images)}
            txt_1={post.title}
            txt_2={`S + ${post.nb_rooms}`}
            idPost={post.id}
            btns={
              <BoxEditDelete
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                idPost={post.id}
                bgColor="white"
                isStudents={true}
                isPosts={true}
                isPoster={post.posterId === user.id}
              />
            }
            heightImg={heightImg}
            widthImg={widthImg}
            isPost={true}
          />
        );
      })}
    </Stack>
  );
};
function handleDelete(): void {
  console.log('delete');
}
function handleEdit(): void {
  console.log('edit');
}
