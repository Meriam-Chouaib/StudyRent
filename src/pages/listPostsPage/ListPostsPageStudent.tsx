// React
import React, { useEffect, useState } from 'react';
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
import {
  useGetFavoriteListQuery,
  useGetMaximalPostPriceQuery,
  useGetMaximalPostSurfaceQuery,
  useGetMinimalPostPriceQuery,
  useGetMinimalPostSurfaceQuery,
  useGetPostsQuery,
} from '../../redux/api/post/post.api';

// utils
import getFilterString from '../../utils/GetFormatFilter';
import { getPersistData } from '../../utils';

import { FilterFields } from './ListPostsPageStudent.type';
import theme from '../../theme';

interface ListPostsProps {
  displayFilter?: boolean;
  isFavorite?: boolean;
}
export const ListPostsPageStudent = ({ displayFilter, isFavorite }: ListPostsProps) => {
  const { data: dataMaxPrice, isLoading: loadingMaxPrice } = useGetMaximalPostPriceQuery({});
  const { data: dataMinPrice, isLoading: loadingMinPrice } = useGetMinimalPostPriceQuery({});

  const { data: dataMaxSurface, isLoading: loadingMaxSurface } = useGetMaximalPostSurfaceQuery({});
  const { data: dataMinSurface, isLoading: loadingMinSurface } = useGetMinimalPostSurfaceQuery({});
  const maxPrice = dataMaxPrice?.data;
  const minPrice = dataMinPrice?.data;
  const maxSurface = dataMaxSurface?.data;
  const minSurface = dataMinSurface?.data;
  const initialFilterState: FilterFields = {
    // price: [minPrice, maxPrice],
    price: [minPrice, maxPrice],
    city: '',
    title: '',
    nb_rooms: '',
    surface: [minSurface, maxSurface],
  };
  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator({
    ...initialPostsPaginator,
    rowsPerPage: 9,
  });

  const [filter, setFilter] = useState<FilterFields>(initialFilterState);

  // ___________________________ handle change the values of filter ___________________________

  const handleCityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter({ ...filter, city: event.target.value as string });
  };

  const handleNbRoomsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter({ ...filter, nb_rooms: event.target.value as number });
  };

  function handlePriceChange(interval: number[]) {
    setFilter({ ...filter, price: [interval[0] * 10, interval[1] * 10] });
    console.log('filter in page student', filter);
  }

  function handleSurfaceChange(interval: number[]) {
    setFilter({ ...filter, surface: [interval[0] * 2, interval[1] * 2] });
  }

  // ____________________________________ get the right format of the filter ___________________________

  const filterString = useDebounce(getFilterString(filter), 1000);
  function handleResetFilter() {
    setFilter(initialFilterState);
    console.log(filter);
  }

  // ____________________________________ call the query to get my data filtred ___________________________

  const { data, isLoading, isError, error } = useGetPostsQuery({
    paginator,
    filter: filterString.length !== 0 ? filterString : '',
  });

  const user = getPersistData('user', true);
  const nbPages = data?.nbPages;
  const { t } = useTranslation();

  useEffect(() => {
    if (data && data?.posts) {
      console.log('filterString', filterString);
    }
  }, [filterString]);
  return (
    <BoxCenter>
      {user && user.role == 'STUDENT' && user.university === undefined && (
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
              filter={filter}
              handleResetFilter={handleResetFilter}
            />
          </BoxCenterFilter>
        )}
        <BoxCenter>
          <Posts
            nbPages={nbPages}
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
        {data?.posts.length !== 0 && data?.posts !== undefined && <GoToMap />}
      </Container>
    </BoxCenter>
  );
};
