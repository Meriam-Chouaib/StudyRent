import React from 'react';
import { Posts } from '../../features';
import { BoxCenter } from '../../components';
import { Filtre } from './Filtre/Filtre';
import { Container } from '@mui/material';
import { COLORS } from '../../config/colors';
import { GoToMap } from '../../features/GoToMap/GoToMap';

export const ListPostsPageStudent = () => {
  return (
    <BoxCenter>
      <Container>
        <BoxCenter margin={'0 auto'}>
          <Filtre />
        </BoxCenter>
        <BoxCenter>
          <Posts
            page={1}
            rowsPerPage={9}
            color={'transparent'}
            padding="0 2.4rem 0 2.4rem"
            margin="2rem 0 0 0"
            withButton={false}
            withPagination={true}
          />
        </BoxCenter>
        <GoToMap />
      </Container>
    </BoxCenter>
  );
};
