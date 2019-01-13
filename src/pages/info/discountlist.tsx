import React from 'react';
import { Grid, Button } from '@material-ui/core';
import classNames from 'classnames';

export function Discountlist({
  classes,
  discount,
  discountList,
  onDiscountChange
}) {
  const selected = ele =>
    ele.label === discount.label ? classes.selected : '';
  return (
    <Grid container direction='row' className={classes.margin}>
      <Grid item xs={3}>
        类型
      </Grid>
      <Grid item xs={9}>
        {discountList.map((ele, i) => (
          <Button
            key={i}
            variant='contained'
            onClick={() => onDiscountChange(ele)}
            className={classNames(classes.flatBtn, selected(ele))}
          >
            {ele.label}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}
