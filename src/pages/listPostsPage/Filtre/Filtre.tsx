import { useTranslation } from 'react-i18next';
import { BoxCenter, BoxCenterSpaceBetween } from '../../../components';
import FilterSlider from './FiltreSlider/FiltreSlider';
import SelectTextFields from '../../../components/SelectInput/SelectInput';
import { Box, Grid, Input, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import { cities_data, nb_rooms_data } from '../../../features/home/posts/fakeData';
import {
  BoxFilter,
  GridCenter,
  InpuFilter,
  LabelFilterValue,
  NoFilter,
} from '../ListPostsPageStudent.style';
import {
  useGetMaximalPostPriceQuery,
  useGetMinimalPostPriceQuery,
  useGetMaximalPostSurfaceQuery,
  useGetMinimalPostSurfaceQuery,
} from '../../../redux/api/post/post.api';
import { FilterFields, FilterProps } from '../ListPostsPageStudent.type';
import iconNoFilter from '../../../assets/icons/filter.png';
import { useEffect, useState } from 'react';
export const Filter = ({
  handleCityChange,
  handleNbRoomsChange,
  handlePriceChange,
  handleSurfaceChange,
  filter,
  handleResetFilter,
}: FilterProps) => {
  const { t } = useTranslation();

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(() => {
    if (filter && filter.price && filter.price[0]) {
      setMinPrice(filter.price[0]);
    } else {
      setMinPrice(0);
    }

    if (filter && filter.price && filter.price[1]) {
      setMaxPrice(filter.price[1]);
    }
  }, [filter]);

  return (
    <BoxFilter zIndex={1100}>
      <GridCenter item xs={12} sm={12} md={3}>
        <NoFilter onClick={handleResetFilter} />
      </GridCenter>
      <Grid container spacing={2} alignItems="center" rowGap={2} width={'80%'}>
        <Grid item xs={12} sm={12} md={3} sx={{ width: '100%' }}>
          <FilterSlider
            label={t('listPostsMain.price')}
            interval={[minPrice, maxPrice]}
            onChange={handlePriceChange}
            step={filter && filter.price ? (filter.price[1] - filter.price[0]) / 100 : 20}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <LabelFilterValue variant="h5">
              {filter && filter.price && filter.price[0]}
            </LabelFilterValue>
            <LabelFilterValue variant="h5">
              {filter && filter.price && filter.price[1]}
            </LabelFilterValue>
          </Box>
        </Grid>
        <GridCenter item xs={12} sm={12} md={2} paddingLeft={'3rem !important'}>
          <SelectTextFields
            data={cities_data}
            txt={t('listPostsMain.city') as string}
            icon={<LocationOnIcon />}
            onChange={handleCityChange}
            defaultValue=""
          />
        </GridCenter>
        <GridCenter item xs={12} sm={12} md={4}>
          <SelectTextFields
            data={nb_rooms_data}
            txt={t('listPostsMain.nb_rooms') as string}
            icon={<HomeIcon />}
            onChange={handleNbRoomsChange}
          />
        </GridCenter>
        <Grid item xs={12} sm={12} md={3} sx={{ width: '100%' }}>
          <FilterSlider
            label={t('listPostsMain.surface')}
            interval={[
              filter && filter.surface && filter.surface[0] ? filter.surface[0] : 0,
              filter && filter.surface && filter.surface[1] ? filter.surface[1] : 0,
            ]}
            onChange={handleSurfaceChange}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <LabelFilterValue variant="h5">
              {filter && filter.surface && filter.surface[0]}
            </LabelFilterValue>
            <LabelFilterValue variant="h5">
              {filter && filter.surface && filter.surface[1]}
            </LabelFilterValue>
            {/* <InpuFilter
              value={
                filter && filter.surface && filter.surface[0]
                  ? filter.surface[0]
                  : minSurface
                  ? minSurface
                  : null
              }
              onChange={() =>
                handlePriceChange(
                  filter && filter.surface && filter?.surface[1] ? filter.surface[1] : maxSurface,
                )
              }
            ></InpuFilter>
            <InpuFilter
              value={
                filter && filter.surface && filter.surface[1]
                  ? filter.surface[1]
                  : maxSurface
                  ? maxSurface
                  : null
              }
            ></InpuFilter> */}
          </Box>
        </Grid>
      </Grid>
    </BoxFilter>
  );
};
