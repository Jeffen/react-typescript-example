import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { Grid, Button, Typography } from '@material-ui/core';

import styles from './styles';
import { AddTicketAction } from '../../store/order';

import Ticketlist from './ticketlist';
import Sessionlist from './sessionlist';
import Discountlist from './discountlist';
import DisplayPrice from './price';
import Quantity from './quantity';
import ActionBtn from './actionBtn';
import { Session, TicketType } from '../../shared/model';

function InfoPanel({ history, event, classes, dispatch, items }) {
  // Event handler
  const [session, setSession] = useState(new Session());
  const [discount, setDiscount] = useState(null);
  useEffect(() => {
    const s = event.sessions.find(ele => ele.default);
    setSession(s);
    setDiscount(s.discountTypes[0]);
  }, [event]);

  // Session handler
  const [ticket, setTicket] = useState(null);
  useEffect(() => {
    setTicket(
      session.ticketTypes.find(ele => !!ele.restQuantity) || new TicketType()
    );
  }, [session]);

  // Quantity handler
  const [quantity, setQuantity] = useState(0);
  useEffect(() => setQuantity(1), [ticket]);

  // Binding events
  const handleCart = () => {
    const payload = { ...ticket, coupon: discount.code, quantity };
    dispatch({ ...new AddTicketAction(payload) });
  };
  const handleCheckout = () => {
    history.push('/confirm');
  };

  return (
    <Grid container direction='row'>
      <Typography variant='h5' className={classes.margin}>
        {event.info.title}
      </Typography>
      <DisplayPrice classes={classes} discount={discount} ticket={ticket} />

      <Ticketlist
        classes={classes}
        ticketList={session.ticketTypes}
        ticket={ticket}
        onTicketChange={setTicket}
      />

      <Grid container direction='row' className={classes.margin}>
        <Grid item xs={3} />
        <Grid item xs={9}>
          <Button variant='outlined' className='seat'>
            座位图
          </Button>
        </Grid>
      </Grid>

      <Sessionlist
        classes={classes}
        sessionList={event.sessions}
        session={session}
        onSessionChange={setSession}
      />

      {session.discountTypes.length > 1 && (
        <Discountlist
          classes={classes}
          discount={discount}
          discountList={session.discountTypes}
          onDiscountChange={setDiscount}
        />
      )}

      <Grid container direction='row' className={classes.margin}>
        <Grid item xs={3}>
          场所
        </Grid>
        <Grid item xs={9}>
          {session.theatre}
        </Grid>
      </Grid>

      <Grid container direction='row' className={classes.margin}>
        <Grid item xs={3}>
          地址
        </Grid>
        <Grid item xs={9}>
          {session.address}
        </Grid>
      </Grid>

      <Quantity
        classes={classes}
        ticket={ticket}
        quantity={quantity}
        onQuantityChange={setQuantity}
      />

      <ActionBtn
        classes={classes}
        session={session}
        items={items}
        onAddToCart={handleCart}
        onCheckout={handleCheckout}
      />
    </Grid>
  );
}

const mapStateToProps = state => ({ items: state.order.items });
export default withStyles(styles)(connect(mapStateToProps)(InfoPanel));
