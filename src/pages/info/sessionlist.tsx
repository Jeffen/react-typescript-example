import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import moment from 'dayjs';

export function Sessionlist({
  classes,
  sessionList,
  session,
  onSessionChange
}) {
  const selected = ele => (ele.id === session.id ? classes.selected : '');
  return (
    <Grid container direction='row' className={classes.margin}>
      <Grid item xs={3}>
        场次
      </Grid>
      <Grid item xs={9}>
        {sessionList.map((ele, i) => (
          <Button
            key={i}
            variant='contained'
            disabled={ele.disabled}
            onClick={() => onSessionChange(ele)}
            className={classNames(classes.flatBtn, selected(ele))}
          >
            {moment(ele.date).format('M月D日')}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}

export default Sessionlist;
