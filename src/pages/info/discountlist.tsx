import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

export function Discountlist({
  classes,
  discount,
  discountList,
  onDiscountChange
}) {
  const selected = ele =>
    ele.name === discount.name ? classes.selected : '';
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
            {ele.name}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}

export default Discountlist;
