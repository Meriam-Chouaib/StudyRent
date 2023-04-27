import React from 'react';
import { Posts } from '../../features';
import { BoxCenter } from '../../components';
import { Filtre } from './Filtre/Filtre';
import { Container } from '@mui/material';
import { COLORS } from '../../config/colors';
import { GoToMap } from '../../features/GoToMap/GoToMap';
import usePaginator from '../../hooks/usePaginator';
import { useGetPostsQuery } from '../../redux/api/post/post.api';
import { initialPostsPaginator } from '../../features/home/posts/posts.constants';
import { BoxCenterFilter } from './ListPostsPageStudent.style';

export const ListPostsPageStudent = () => {
  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator({
    ...initialPostsPaginator,
    rowsPerPage: 9,
  });
  const { data, isLoading, isError, error } = useGetPostsQuery(paginator);
  return (
    <BoxCenter>
      <Container>
        <BoxCenterFilter>
          <Filtre />
        </BoxCenterFilter>
        <BoxCenter>
          <Posts
            page={1}
            rowsPerPage={9}
            color={'transparent'}
            padding="0 2.4rem 0 2.4rem"
            margin="2rem 0 0 0"
            withButton={false}
            withPagination={true}
            dataPosts={data}
            isLoading={isLoading}
            onChangePage={onChangePage}
          />
        </BoxCenter>
        <GoToMap />
      </Container>
    </BoxCenter>
  );
};
