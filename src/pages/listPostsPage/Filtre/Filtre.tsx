import { useTranslation } from 'react-i18next';
import { BoxCenter } from '../../../components';
import FiltreSelect from './FiltreSlider/FiltreSlider';
import SelectTextFields from '../../../components/SelectInput/SelectInput';
import { Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import { cities_data, nb_rooms_data } from '../../../features/home/posts/fakeData';
import { useEffect, useState } from 'react';

export const Filtre = () => {
  const { t } = useTranslation();
  const [price, setPrice] = useState([500, 1200]);
  const [city, setCity] = useState('');
  const [nbRooms, setNbRooms] = useState('');
  const [surface, setSurface] = useState([80, 1000]);

  const handlePriceChange = (value: number[]) => {
    setPrice(value);
  };

  const handleCityChange = (value: string) => {
    setCity(value);
  };

  const handleNbRoomsChange = (value: string) => {
    setNbRooms(value);
  };

  const handleSurfaceChange = (value: number[]) => {
    setSurface(value);
  };

  useEffect(() => {
    console.log('Filter valueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees price', price);
    console.log('Filter valueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees city', city);
    console.log('Filter valueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees nbRooms', nbRooms);
    console.log('Filter valueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees surface', surface);

    // fetchData();
  }, [price, city, nbRooms, surface]);

  return (
    <BoxCenter sx={{ flex: 1 }}>
      <Grid container spacing={2} alignItems="center" rowGap={2} width={'80%'}>
        <Grid item xs={12} sm={6} md={3}>
          <FiltreSelect
            label={t('listPostsMain.price')}
            interval={[500, 1200]}
            // onIntervalChange={handlePriceChange}
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
          <FiltreSelect
            label={t('listPostsMain.surface')}
            interval={[80, 1000]}
            //  onChange={handleSurfaceChange}
          />
        </Grid>
      </Grid>
    </BoxCenter>
  );
};
