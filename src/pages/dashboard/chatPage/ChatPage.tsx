import { BoxCenter } from '../../../components';
import chat_page from '../../../assets/images/chat_page.png';
import Image from '../../../components/image/Image';
export const ChatPage = () => {
  return (
    <>
      <BoxCenter>
        <Image
          src={chat_page}
          disabledEffect={false}
          effect={'opacity'}
          ratio={'4/3'}
          sx={{ width: '70%' }}
        />
      </BoxCenter>
    </>
  );
};
