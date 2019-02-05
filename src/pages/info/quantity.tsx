import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

export function Quantity({ classes, ticket, quantity, onQuantityChange }) {
  const handleQuantity = num => () => {
    const result = quantity + num;
    if (result <= Math.min(9, ticket.restQuantity) && result > 0) {
      onQuantityChange(result);
    }
  };

  return (
    <Grid container className={classes.margin} alignItems='center'>
      <Grid item xs={3}>
        数量
      </Grid>
      <Grid item container alignItems='center' xs={9}>
        <IconButton className={classes.numBtn} onClick={handleQuantity(-1)}>
          <Icon>remove</Icon>
        </IconButton>
        <input
          className={classes.quantityInput}
          type='number'
          disabled
          value={quantity}
        />
        <IconButton
          color='primary'
          className={classes.numBtn}
          onClick={handleQuantity(1)}
        >
          <Icon>add</Icon>
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Quantity;
