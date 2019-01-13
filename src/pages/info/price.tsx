import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

export function DisplayPrice({ classes, discount, ticket }) {
  const [price, setPrice] = useState(0);
  const [rate, setRate] = useState(1);

  useEffect(
    () => {
      setRate(discount ? discount.rate : 1);
      setPrice(ticket ? ticket.facePrice : 0);
    },
    [discount, ticket]
  );

  return (
    <Grid
      container
      direction='row'
      className={classes.margin}
      alignItems='center'
    >
      <Grid item xs={3}>
        票价
      </Grid>
      <Grid item xs={9}>
        {!rate && (
          <span className={classes.priceText}>
            CA${(price * rate).toFixed(2)}
          </span>
        )}
        <span className={rate ? classes.priceText : classes.oldPrice}>
          CA${price.toFixed(2)}
        </span>
      </Grid>
    </Grid>
  );
}
