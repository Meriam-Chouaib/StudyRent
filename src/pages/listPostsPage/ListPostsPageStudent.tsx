import React from 'react';
import { Posts } from '../../features';
import { BoxCenter } from '../../components';

export const ListPostsPageStudent = () => {
  return (
    <BoxCenter>
      <Posts
        page={1}
        rowsPerPage={9}
        color={'transparent'}
        padding="0"
        margin="2rem 0"
        withButton={false}
        withPagination={true}
      />
    </BoxCenter>
  );
};
