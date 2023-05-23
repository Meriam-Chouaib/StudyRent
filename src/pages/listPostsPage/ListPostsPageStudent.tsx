// React
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
// style
import { BoxCenterFilter, WarningMsg } from './ListPostsPageStudent.style';

// mui
import { Container, Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';

// features
import { Posts, initialPostsPaginator, GoToMap } from '../../features';

import { BoxCenter, Toast } from '../../components';

// filtre
import { Filter } from './Filtre/Filtre';

// hooks
import usePaginator from '../../hooks/usePaginator';
import { useDebounce } from '../../hooks/useDebounce';
// redux
import { useGetFavoriteListQuery, useGetPostsQuery } from '../../redux/api/post/post.api';
import { IUser } from '../../redux/api/user/user.types';

// utils
import getFilterString from '../../utils/GetFormatFilter';
import { getPersistData } from '../../utils';

import { FilterFields } from './ListPostsPageStudent.type';
import { COLORS } from '../../config/colors';
import theme from '../../theme';
interface ListPostsProps {
  displayFilter?: boolean;
  isFavorite?: boolean;
}
export const ListPostsPageStudent = ({ displayFilter, isFavorite }: ListPostsProps) => {
  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator({
    ...initialPostsPaginator,
    rowsPerPage: 9,
  });
  const [price, setPrice] = useState<number[]>([400, 12000]);
  const [city, setCity] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [nb_rooms, setNbRooms] = useState<number>();
  const [surface, setSurface] = useState<number[]>([100, 12000]);
  const [filter, setFilter] = useState<FilterFields>({
    price,
    city,
    title,
    nb_rooms,
    surface,
  });

  // ___________________________ handle change the values of filter ___________________________

  const handleCityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value as string);
    setFilter({ ...filter, city: event.target.value as string });
  };

  const handleNbRoomsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNbRooms(event.target.value as number);
    setFilter({ ...filter, nb_rooms: event.target.value as number });
  };

  function handlePriceChange(interval: number[]) {
    setPrice(interval);
    setFilter({ ...filter, price: interval });
  }

  function handleSurfaceChange(interval: number[]) {
    setSurface(interval);
    setFilter({ ...filter, surface: interval });
  }
  // ____________________________________ get the right format of the filter ___________________________

  const filterString = useDebounce(getFilterString(filter), 1000);

  // ____________________________________ call the query to get my data filtred ___________________________

  const { data, isLoading, isError, error } = useGetPostsQuery({
    paginator,
    filter: filterString,
  });

  const user: IUser = getPersistData('user', true);
  const { t } = useTranslation();
  return (
    <BoxCenter>
      {user &&
        user.role == 'STUDENT' &&
        true && ( // !user.university
          <>
            <WarningMsg>
              <Warning style={{ color: `${theme.palette.primary.dark}` }} />

              <Typography variant="h6"> {t('listPostsMain.toast_info')}</Typography>
            </WarningMsg>
          </>
        )}
      <Container>
        {/*  ________________ notify student ______________________ */}

        {/*  ________________ render the posts filtered ______________________ */}

        {displayFilter && (
          <BoxCenterFilter>
            <Filter
              handleCityChange={handleCityChange}
              handleNbRoomsChange={handleNbRoomsChange}
              handlePriceChange={handlePriceChange}
              handleSurfaceChange={handleSurfaceChange}
            />
          </BoxCenterFilter>
        )}
        <BoxCenter>
          <Posts
            page={1}
            rowsPerPage={9}
            color={'transparent'}
            padding="0 2.4rem 0 2.4rem"
            margin="2rem 0 0 0"
            withButton={false}
            withPagination={true}
            dataPosts={data?.posts}
            isLoading={isLoading}
            onChangePage={onChangePage}
          />
        </BoxCenter>
        <GoToMap />
      </Container>
    </BoxCenter>
  );
};
