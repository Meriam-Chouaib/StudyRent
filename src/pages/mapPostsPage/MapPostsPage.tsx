import { initialPostsPaginator } from '../../features';
import usePaginator from '../../hooks/usePaginator';
import { useGetPostsQuery } from '../../redux/api/post/post.api';
import { Map } from '../../features/map/Map';
import { Stack } from '@mui/material';
import { Container } from '@mui/material';
import { useState } from 'react';
import { FilterFields } from '../listPostsPage/ListPostsPageStudent.type';
import { useDebounce } from '../../hooks';
import getFilterString from '../../utils/GetFormatFilter';
import { Filter } from '../listPostsPage/Filtre/Filtre';
import { BoxCenterFilter } from '../listPostsPage/ListPostsPageStudent.style';
export const MapPostsPage = () => {
  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator({
    ...initialPostsPaginator,
    rowsPerPage: 9,
  });

  // _____________________filter _______________________
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
  const filterString = useDebounce(getFilterString(filter), 1000);
  const { data, isLoading, isError, error } = useGetPostsQuery({ paginator, filter: filterString });

  return (
    <>
      <Container>
        <BoxCenterFilter>
          <Filter
            handleCityChange={handleCityChange}
            handleNbRoomsChange={handleNbRoomsChange}
            handlePriceChange={handlePriceChange}
            handleSurfaceChange={handleSurfaceChange}
          />
        </BoxCenterFilter>
        <Stack paddingY={'2rem'}>
          {data != undefined && (
            <Map localizations={data.localizations} posts={data.posts} height="32rem" />
          )}
        </Stack>
      </Container>
    </>
  );
};
