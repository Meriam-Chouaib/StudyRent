import { useTranslation } from 'react-i18next';
import { BoxCenter } from '../../../components';
import FilterSlider from './FiltreSlider/FiltreSlider';
import SelectTextFields from '../../../components/SelectInput/SelectInput';
import { Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import { cities_data, nb_rooms_data } from '../../../features/home/posts/fakeData';
import { useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';

export const Filtre = () => {
  const { t } = useTranslation();
  const [price, setPrice] = useState([500, 1200]);
  const [city, setCity] = useState('');
  const [nb_rooms, setNbRooms] = useState('');
  const [surface, setSurface] = useState([80, 1000]);

  const handleCityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value as string);
    debouncedRequest();
  };

  const handleNbRoomsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNbRooms(event.target.value as string);
    debouncedRequest();
  };

  function handlePriceChange(interval: number[]) {
    setPrice(interval);
    debouncedRequest();
  }

  const debouncedRequest = useDebounce(() => {
    console.log('get the values of the filter', price, city, nb_rooms, surface);
    // send request to the backend with the filtered values
  }, 1000);

  function handleSurfaceChange(interval: number[]) {
    setSurface(interval);
    debouncedRequest();
  }

  return (
    <BoxCenter sx={{ flex: 1 }}>
      <Grid container spacing={2} alignItems="center" rowGap={2} width={'80%'}>
        <Grid item xs={12} sm={6} md={3}>
          <FilterSlider
            label={t('listPostsMain.price')}
            // TODO get the min price, max price from the back

            interval={[25, 100]}
            onChange={handlePriceChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2} paddingLeft={'3rem !important'}>
          <SelectTextFields
            data={cities_data}
            txt={t('listPostsMain.city') as string}
            icon={<LocationOnIcon />}
            onChange={handleCityChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SelectTextFields
            data={nb_rooms_data}
            txt={t('listPostsMain.nb_rooms') as string}
            icon={<HomeIcon />}
            onChange={handleNbRoomsChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FilterSlider
            label={t('listPostsMain.surface')}
            // TODO get the min surface, max surface from the back
            interval={[80, 100]}
            onChange={handleSurfaceChange}
          />
        </Grid>
      </Grid>
    </BoxCenter>
  );
};
