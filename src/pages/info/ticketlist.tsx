import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

export function Ticketlist({ classes, ticketList, onTicketChange, ticket }) {
  const selected = ele =>
    ele.ticketName === ticket.ticketName ? classes.selected : '';
  return (
    <Grid container direction='row' className={classes.margin}>
      <Grid item xs={3} />
      <Grid item xs={9}>
        {ticketList.map((ele, i) => (
          <Button
            key={i}
            variant='contained'
            disabled={ele.restQuantity === 0}
            className={classNames(classes.flatBtn, selected(ele))}
            onClick={() => onTicketChange(ele)}
          >
            ${ele.facePrice}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}

export default Ticketlist;
