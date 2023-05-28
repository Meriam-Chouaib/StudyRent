import { useTranslation } from 'react-i18next';
import FilterSlider from './FiltreSlider/FiltreSlider';
import SelectTextFields from '../../../components/SelectInput/SelectInput';
import { Box, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import { cities_data, nb_rooms_data } from '../../../features/home/posts/fakeData';
import { BoxFilter, GridCenter, LabelFilterValue, NoFilter } from '../ListPostsPageStudent.style';

import { FilterProps } from '../ListPostsPageStudent.type';
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
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [minSurface, setMinSurface] = useState<number>(0);
  const [maxSurface, setMaxSurface] = useState<number>(200);
  const [nbRooms, setNbRooms] = useState<number | string>('');
  const [city, setCity] = useState<string>('');

  useEffect(() => {
    if (filter) {
      if (filter.price) {
        if (filter.price[0]) setMinPrice(filter.price[0]);
        if (filter.price[1]) setMaxPrice(filter.price[1]);
      }
      if (filter.surface) {
        if (filter.surface[0]) setMinSurface(filter.surface[0]);
        if (filter.surface[1]) setMaxSurface(filter.surface[1]);
      }
      if (filter.nb_rooms) {
        setNbRooms(Number(filter.nb_rooms));
      }
      if (filter.city) {
        setCity(filter.city);
      }
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
            valueToAdd={10}
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
            defaultValue={city ? city : ''}
            value={city}
          />
        </GridCenter>
        <GridCenter item xs={12} sm={12} md={4}>
          <SelectTextFields
            data={nb_rooms_data}
            txt={t('listPostsMain.nb_rooms') as string}
            icon={<HomeIcon />}
            defaultValue=""
            onChange={handleNbRoomsChange}
            value={nbRooms}
          />
        </GridCenter>
        <Grid item xs={12} sm={12} md={3} sx={{ width: '100%' }}>
          <FilterSlider
            label={t('listPostsMain.surface')}
            interval={[minSurface, maxSurface]}
            onChange={handleSurfaceChange}
            valueToAdd={2}
            step={filter && filter.surface ? (filter.surface[1] - filter.surface[0]) / 100 : 20}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <LabelFilterValue variant="h5">
              {filter && filter.surface && filter.surface[0]}
            </LabelFilterValue>
            <LabelFilterValue variant="h5">
              {filter && filter.surface && filter.surface[1]}
            </LabelFilterValue>
          </Box>
        </Grid>
      </Grid>
    </BoxFilter>
  );
};
