import { initialPostsPaginator } from '../../features';
import usePaginator from '../../hooks/usePaginator';
import {
  useGetMaximalPostPriceQuery,
  useGetMaximalPostSurfaceQuery,
  useGetMinimalPostPriceQuery,
  useGetMinimalPostSurfaceQuery,
  useGetPostsQuery,
} from '../../redux/api/post/post.api';
import { Map } from '../../features/map/Map';
import { Stack } from '@mui/material';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { FilterFields } from '../listPostsPage/ListPostsPageStudent.type';
import { useDebounce } from '../../hooks';
import getFilterString from '../../utils/GetFormatFilter';
import { Filter } from '../listPostsPage/Filtre/Filtre';
import { BoxCenterFilter } from '../listPostsPage/ListPostsPageStudent.style';
import { Link } from 'react-router-dom';
import { ButtonWithIcon } from '../../components';
import { PATHS } from '../../config/paths';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useTranslation } from 'react-i18next';
import { LoaderBox } from '../../components/Loader/LoaderBox';

export const MapPostsPage = () => {
  const { data: dataMaxPrice, isLoading: loadingMaxPrice } = useGetMaximalPostPriceQuery({});
  const { data: dataMinPrice, isLoading: loadingMinPrice } = useGetMinimalPostPriceQuery({});

  const { data: dataMaxSurface, isLoading: loadingMaxSurface } = useGetMaximalPostSurfaceQuery({});
  const { data: dataMinSurface, isLoading: loadingMinSurface } = useGetMinimalPostSurfaceQuery({});
  const maxPrice = dataMaxPrice?.data;
  const minPrice = dataMinPrice?.data;
  const maxSurface = dataMaxSurface?.data;
  const minSurface = dataMinSurface?.data;
  const initialFilterState: FilterFields = {
    price: [minPrice, maxPrice],
    city: '',
    title: '',
    nb_rooms: '',
    surface: [minSurface, maxSurface],
  };
  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator({
    ...initialPostsPaginator,
    rowsPerPage: 100,
    isMapPage: true,
  });

  // _____________________filter _______________________

  const [filter, setFilter] = useState<FilterFields>(initialFilterState);

  // ___________________________ handle change the values of filter ___________________________

  const handleCityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter({ ...filter, city: event.target.value as string });
  };

  const handleNbRoomsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter({ ...filter, nb_rooms: event.target.value as number });
  };

  function handlePriceChange(interval: number[]) {
    setFilter({ ...filter, price: [interval[0] * 15, interval[1] * 15] });
  }

  function handleSurfaceChange(interval: number[]) {
    setFilter({ ...filter, surface: [interval[0] * 2, interval[1] * 2] });
  }
  const filterString = useDebounce(getFilterString(filter), 1000);
  function handleResetFilter() {
    setFilter(initialFilterState);
  }
  const { data, isLoading, isError, error } = useGetPostsQuery({
    paginator,
    filter: filterString.length !== 0 ? filterString : '',
  });

  const fetchPostsData = async () => {
    try {
      const response = await useGetPostsQuery({
        paginator: {
          ...paginator,
        },
        filter: filterString.length !== 0 ? filterString : '',
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPostsData();
  }, [filterString]);

  const { t } = useTranslation();
  return (
    <>
      <Container>
        <BoxCenterFilter>
          <Filter
            handleCityChange={handleCityChange}
            handleNbRoomsChange={handleNbRoomsChange}
            handlePriceChange={handlePriceChange}
            handleSurfaceChange={handleSurfaceChange}
            handleResetFilter={handleResetFilter}
            filter={filter}
          />
        </BoxCenterFilter>
        <Stack paddingY={'2rem'}>
          {data === undefined ? (
            <LoaderBox />
          ) : (
            <Map localizations={data.localizations} posts={data.posts} height="32rem" />
          )}
        </Stack>
        <Link to={`/${PATHS.POSTS}`} style={{ textDecoration: 'none' }}>
          <ButtonWithIcon
            margBottom="3rem"
            icon={<ArrowBackIcon />}
            txt={t('dashboardListPosts.back_list') as string}
          />
        </Link>
      </Container>
    </>
  );
};
