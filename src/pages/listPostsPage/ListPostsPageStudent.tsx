import React, { useState } from 'react';
import { Posts } from '../../features';
import { BoxCenter } from '../../components';
import { Filter } from './Filtre/Filtre';
import { Container } from '@mui/material';
import { COLORS } from '../../config/colors';
import { GoToMap } from '../../features/GoToMap/GoToMap';
import usePaginator from '../../hooks/usePaginator';
import { useGetPostsQuery } from '../../redux/api/post/post.api';
import { initialPostsPaginator } from '../../features/home/posts/posts.constants';
import { BoxCenterFilter } from './ListPostsPageStudent.style';
import { useDebounce } from '../../hooks/useDebounce';
import getFilterString from '../../utils/GetFormatFilter';
import { FilterFields } from './ListPostsPageStudent.type';

export const ListPostsPageStudent = () => {
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
  return (
    <BoxCenter>
      <Container>
        <BoxCenterFilter>
          <Filter
            handleCityChange={handleCityChange}
            handleNbRoomsChange={handleNbRoomsChange}
            handlePriceChange={handlePriceChange}
            handleSurfaceChange={handleSurfaceChange}
          />
        </BoxCenterFilter>
        <BoxCenter>
          <Posts
            page={1}
            rowsPerPage={9}
            color={'transparent'}
            padding="0 2.4rem 0 2.4rem"
            margin="2rem 0 0 0"
            withButton={false}
            withPagination={true}
            dataPosts={data}
            isLoading={isLoading}
            onChangePage={onChangePage}
          />
        </BoxCenter>
        <GoToMap />
      </Container>
    </BoxCenter>
  );
};
