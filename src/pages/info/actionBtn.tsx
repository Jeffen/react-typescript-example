import React, { useEffect, useState } from 'react';
import { Icon, Button } from '@material-ui/core';

export function ActionBtn({
  classes,
  session,
  onAddToCart,
  onCheckout,
  items
}) {
  const [soldout, setSoldout] = useState(null);
  useEffect(
    () => {
      const r = session.ticketTypes.find(ele => ele.restQuantity > 0)
        ? false
        : true;
      setSoldout(r);
    },
    [session]
  );

  return (
    <div>
      {soldout ? (
        <Button
          variant='contained'
          size='large'
          className={classes.actionBtn}
          disabled
        >
          Sold out
        </Button>
      ) : (
        <div>
          <Button
            variant='outlined'
            color='primary'
            size='large'
            className={classes.actionBtn}
            onClick={onAddToCart}
          >
            <Icon>shopping_cart</Icon>加入购物车
          </Button>
          {items.length > 0 && (
            <Button
              color='primary'
              variant='contained'
              size='large'
              className={classes.actionBtn}
              onClick={onCheckout}
            >
              下单
              <span className={classes.badge}>{items.length}</span>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default ActionBtn;
