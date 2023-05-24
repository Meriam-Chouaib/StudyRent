// import { useTranslation } from 'react-i18next';
// import { BoxCenter, BoxCenterSpaceBetween } from '../../../components';
// import FilterSlider from './FiltreSlider/FiltreSlider';
// import SelectTextFields from '../../../components/SelectInput/SelectInput';
// import { Box, Grid, Input } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HomeIcon from '@mui/icons-material/Home';
// import { cities_data, nb_rooms_data } from '../../../features/home/posts/fakeData';
// import { BoxFilter, GridCenter, InpuFilter } from '../ListPostsPageStudent.style';
// import {
//   useGetMaximalPostPriceQuery,
//   useGetMinimalPostPriceQuery,
//   useGetMaximalPostSurfaceQuery,
//   useGetMinimalPostSurfaceQuery,
// } from '../../../redux/api/post/post.api';
// import { FilterProps } from '../ListPostsPageStudent.type';

// export const Filter = ({
//   handleCityChange,
//   handleNbRoomsChange,
//   handlePriceChange,
//   handleSurfaceChange,
//   filter,
// }: FilterProps) => {
//   const { t } = useTranslation();
//   const { data: dataMaxPrice, isLoading: loadingMaxPrice } = useGetMaximalPostPriceQuery({});
//   const { data: dataMinPrice, isLoading: loadingMinPrice } = useGetMinimalPostPriceQuery({});

//   const { data: dataMaxSurface, isLoading: loadingMaxSurface } = useGetMaximalPostSurfaceQuery({});
//   const { data: dataMinSurface, isLoading: loadingMinSurface } = useGetMinimalPostSurfaceQuery({});
//   const maxPrice = dataMaxPrice?.data;
//   const minPrice = dataMinPrice?.data;
//   const maxSurface = dataMaxSurface?.data;
//   const minSurface = dataMinSurface?.data;

//   //   console.log(
//   //     'filter888888888888888',
//   //     maxPrice,
//   //     'min price',
//   //     minPrice,
//   //     'max surface',
//   //     maxSurface,
//   //     'minpriice',
//   //     minPrice,
//   //   );

//   return (
//     <BoxFilter>
//       <Grid container spacing={2} alignItems="center" rowGap={2} width={'80%'}>
//         <Grid item xs={12} sm={12} md={3} sx={{ width: '100%' }}>
//           <FilterSlider
//             label={t('listPostsMain.price')}
//             interval={[
//               filter && filter.price && filter.price[0] ? filter.price[0] : 0,
//               // minPrice ? minPrice : (filter && filter.price && filter.price[0]) || 100,
//               filter && filter.price && filter.price[1] ? filter.price[1] : 0,
//             ]}
//             onChange={handlePriceChange}
//             step={filter && filter.price ? (filter.price[0] + filter.price[1]) / 2 : 50}
//           />
//           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//             <InpuFilter
//               value={
//                 filter && filter.price && filter.price[0]
//                   ? filter.price[0]
//                   : minPrice
//                   ? minPrice
//                   : 100
//               }
//               onChange={() =>
//                 handlePriceChange(
//                   filter && filter.price && filter?.price[1] ? filter.price[1] : maxPrice,
//                 )
//               }
//             ></InpuFilter>
//             <InpuFilter
//               value={
//                 filter && filter.price && filter.price[1]
//                   ? filter.price[1]
//                   : maxPrice
//                   ? maxPrice
//                   : null
//               }
//             ></InpuFilter>
//           </Box>
//           {/* <Input value={}></Input> */}
//         </Grid>
//         <GridCenter item xs={12} sm={12} md={2} paddingLeft={'3rem !important'}>
//           <SelectTextFields
//             data={cities_data}
//             txt={t('listPostsMain.city') as string}
//             icon={<LocationOnIcon />}
//             onChange={handleCityChange}
//           />
//         </GridCenter>
//         <GridCenter item xs={12} sm={12} md={4}>
//           <SelectTextFields
//             data={nb_rooms_data}
//             txt={t('listPostsMain.nb_rooms') as string}
//             icon={<HomeIcon />}
//             onChange={handleNbRoomsChange}
//           />
//         </GridCenter>
//         <GridCenter item xs={12} sm={12} md={3}>
//           <FilterSlider
//             label={t('listPostsMain.surface')}
//             // TODO get the min surface, max surface from the back
//             interval={[80, 1000]}
//             onChange={handleSurfaceChange}
//           />
//         </GridCenter>
//       </Grid>
//     </BoxFilter>
//   );
// };
import { useTranslation } from 'react-i18next';
import { BoxCenter, BoxCenterSpaceBetween } from '../../../components';
import FilterSlider from './FiltreSlider/FiltreSlider';
import SelectTextFields from '../../../components/SelectInput/SelectInput';
import { Box, Grid, Input } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import { cities_data, nb_rooms_data } from '../../../features/home/posts/fakeData';
import { BoxFilter, GridCenter, InpuFilter, NoFilter } from '../ListPostsPageStudent.style';
import {
  useGetMaximalPostPriceQuery,
  useGetMinimalPostPriceQuery,
  useGetMaximalPostSurfaceQuery,
  useGetMinimalPostSurfaceQuery,
} from '../../../redux/api/post/post.api';
import { FilterFields, FilterProps } from '../ListPostsPageStudent.type';
import iconNoFilter from '../../../assets/icons/filter.png';
import { useState } from 'react';
export const Filter = ({
  handleCityChange,
  handleNbRoomsChange,
  handlePriceChange,
  handleSurfaceChange,
  filter,
  handleResetFilter,
}: FilterProps) => {
  const { t } = useTranslation();
  const { data: dataMaxPrice, isLoading: loadingMaxPrice } = useGetMaximalPostPriceQuery({});
  const { data: dataMinPrice, isLoading: loadingMinPrice } = useGetMinimalPostPriceQuery({});

  const { data: dataMaxSurface, isLoading: loadingMaxSurface } = useGetMaximalPostSurfaceQuery({});
  const { data: dataMinSurface, isLoading: loadingMinSurface } = useGetMinimalPostSurfaceQuery({});
  const maxPrice = dataMaxPrice?.data;
  const minPrice = dataMinPrice?.data;
  const maxSurface = dataMaxSurface?.data;
  const minSurface = dataMinSurface?.data;

  console.log('22222222222222222filter from Filter.tsx', filter);

  //   console.log(
  //     'filter888888888888888',
  //     maxPrice,
  //     'min price',
  //     minPrice,
  //     'max surface',
  //     maxSurface,
  //     'minpriice',
  //     minPrice,
  //   );
  //   function test() {
  //     const initialStateFilter: FilterFields = {
  //       city: '',
  //       nb_rooms: undefined,
  //       price: [],
  //       surface: [],
  //       title: '',
  //     };
  //     setFilter(initialStateFilter);
  //     // console.log('handleResetFilter', filter);
  //     console.log('test');
  //   }
  return (
    <BoxFilter>
      <GridCenter item xs={12} sm={12} md={3}>
        <NoFilter onClick={handleResetFilter} />
      </GridCenter>
      <Grid container spacing={2} alignItems="center" rowGap={2} width={'80%'}>
        <Grid item xs={12} sm={12} md={3} sx={{ width: '100%' }}>
          <FilterSlider
            label={t('listPostsMain.price')}
            interval={[
              filter && filter.price && filter.price[0] ? filter.price[0] : 0,
              filter && filter.price && filter.price[1] ? filter.price[1] : 0,
            ]}
            onChange={handlePriceChange}
            step={filter && filter.price ? (filter.price[1] - filter.price[0]) / 100 : 20}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <InpuFilter
              value={
                filter && filter.price && filter.price[0]
                  ? filter.price[0]
                  : minPrice
                  ? minPrice
                  : null
              }
              onChange={() =>
                handlePriceChange(
                  filter && filter.price && filter?.price[1] ? filter.price[1] : maxPrice,
                )
              }
            ></InpuFilter>
            <InpuFilter
              value={
                filter && filter.price && filter.price[1]
                  ? filter.price[1]
                  : maxPrice
                  ? maxPrice
                  : null
              }
            ></InpuFilter>
          </Box>
          {/* <Input value={}></Input> */}
        </Grid>
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
        <Grid item xs={12} sm={12} md={3} sx={{ width: '100%' }}>
          <FilterSlider
            label={t('listPostsMain.surface')}
            // TODO get the min surface, max surface from the back
            interval={[
              filter && filter.surface && filter.surface[0] ? filter.surface[0] : 0,
              filter && filter.surface && filter.surface[1] ? filter.surface[1] : 0,
            ]}
            onChange={handleSurfaceChange}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <InpuFilter
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
            ></InpuFilter>
          </Box>
        </Grid>
      </Grid>
    </BoxFilter>
  );
};
