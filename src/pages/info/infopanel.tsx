import React, { useState, useEffect } from 'react';
import { Grid, Button, withStyles, Typography } from '@material-ui/core';

import styles from './styles';

import { Ticketlist } from './ticketlist';
import { Sessionlist } from './sessionlist';
import { Discountlist } from './discountlist';
import { DisplayPrice } from './price';
import { Session, TicketType, DiscountType } from '../../shared/model';

function InfoPanel({ classes, event }) {
  const [ticket, setTicket] = useState(null);
  const [session, setSession] = useState(new Session());
  const [discount, setDiscount] = useState(null);

  useEffect(() => setSession(event.sessions.find(ele => ele.default)), [event]);

  useEffect(
    () => {
      setTicket(
        session.ticketTypes.find(ele => !!ele.restQuantity) || new TicketType()
      );
      setDiscount(session.discountTypes[0] || new DiscountType());
    },
    [session]
  );

  return (
    <Grid container direction='row'>
      <Typography variant='h5' className={classes.margin}>
        华韵盛典 2019新年音乐会
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

      <Grid container direction='row'>
        <Grid item xs={3}>
          地址
        </Grid>
        <Grid item xs={9}>
          {session.address}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(InfoPanel);
