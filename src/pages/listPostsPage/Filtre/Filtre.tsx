import { useTranslation } from 'react-i18next';
import { BoxCenter } from '../../../components';
import FilterSlider from './FiltreSlider/FiltreSlider';
import SelectTextFields from '../../../components/SelectInput/SelectInput';
import { Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import { cities_data, nb_rooms_data } from '../../../features/home/posts/fakeData';
import { GridCenter } from '../ListPostsPageStudent.style';

interface FilterProps {
  handleCityChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleNbRoomsChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handlePriceChange: (interval: number[]) => void;
  handleSurfaceChange: (interval: number[]) => void;
}
export const Filter = ({
  handleCityChange,
  handleNbRoomsChange,
  handlePriceChange,
  handleSurfaceChange,
}: FilterProps) => {
  const { t } = useTranslation();

  return (
    <BoxCenter sx={{ flex: 1 }}>
      <Grid container spacing={2} alignItems="center" rowGap={2} width={'80%'}>
        <GridCenter item xs={12} sm={12} md={3}>
          <FilterSlider
            label={t('listPostsMain.price')}
            // TODO get the min price, max price from the back

            interval={[300, 10000]}
            onChange={handlePriceChange}
          />
        </GridCenter>
        <GridCenter item xs={12} sm={12} md={2} paddingLeft={'3rem !important'}>
          <SelectTextFields
            data={cities_data}
            txt={t('listPostsMain.city') as string}
            icon={<LocationOnIcon />}
            onChange={handleCityChange}
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
        <GridCenter item xs={12} sm={12} md={3}>
          <FilterSlider
            label={t('listPostsMain.surface')}
            // TODO get the min surface, max surface from the back
            interval={[80, 1000]}
            onChange={handleSurfaceChange}
          />
        </GridCenter>
      </Grid>
    </BoxCenter>
  );
};
