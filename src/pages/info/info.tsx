import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';

import styles from './styles.css';

let cx = classNames.bind(styles);

export function Info({ history }) {
  // Declare a new state variable, which we'll call "count"
  const className = cx('info');
  return (
    <div className={className}>
      <h1>Info Page</h1>
      <Grid container direction='row'>
        <Grid item md={6} xs={12}>
          first
        </Grid>
        <Grid item md={6} xs={12}>
          last
        </Grid>
      </Grid>
    </div>
  );
}
