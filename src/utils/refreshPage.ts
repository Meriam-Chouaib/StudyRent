import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

export const refreshPage = () => {
  navigate(0);
};
