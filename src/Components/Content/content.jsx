import React from 'react';
import BookmarkCard from '../BookmarkCard/bookmarkCard';
import { Grid } from '@material-ui/core';

const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        <BookmarkCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <BookmarkCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <BookmarkCard />
      </Grid>
    </Grid>
  )
}

export default Content;