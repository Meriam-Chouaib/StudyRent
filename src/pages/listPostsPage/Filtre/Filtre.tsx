import { useTranslation } from 'react-i18next';
import { BoxCenter } from '../../../components';
import FiltreSelect from './FiltreSlider/FiltreSlider';
import SelectTextFields from '../../../components/SelectInput/SelectInput';
import { Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';

const nb_rooms_data = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
];
const cities_data = [
  {
    value: 'sousse',
    label: 'sousse',
  },
  {
    value: 'monastir',
    label: 'monastir',
  },
  {
    value: 'mahdia',
    label: 'mahdia',
  },
  {
    value: 'sfax',
    label: 'sfax',
  },
];
export const Filtre = () => {
  const { t } = useTranslation();
  return (
    <BoxCenter sx={{ flex: 1 }}>
      <Grid container spacing={2} alignItems="center" rowGap={2} width={'80%'}>
        <Grid item xs={12} sm={6} md={3}>
          <FiltreSelect label={t('listPostsMain.price')} interval={[500, 1200]} />
        </Grid>
        <Grid item xs={12} sm={6} md={2} paddingLeft={'3rem !important'}>
          <SelectTextFields
            data={cities_data}
            txt={t('listPostsMain.city') as string}
            icon={<LocationOnIcon />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SelectTextFields
            data={nb_rooms_data}
            txt={t('listPostsMain.nb_rooms') as string}
            icon={<HomeIcon />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FiltreSelect label={t('listPostsMain.surface')} interval={[80, 1000]} />
        </Grid>
      </Grid>
    </BoxCenter>
  );
};
