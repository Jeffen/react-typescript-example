import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { RouteComponentProps } from 'react-router';
import ContentLoader from 'react-content-loader';
import groupBy from 'lodash/groupBy';

import { Event } from '../../shared/model';
import cover from './img/cover.jpg';

import InfoPanel from './infopanel';
import EventContent from './content';

export default function Info({ history }: RouteComponentProps) {
  const [event, setEvent] = useState<Event>(null);

  const fetchEventData = async () => {
    const projConfig = await axios(
      `${process.env.PUBLIC_URL}/db/hysd2019/event.json`
    ).then(res => res.data);
    const vendor = await axios(
      'https://eventtest.ottpay.com/api/ticket/summary/hysd2019'
    ).then(res => groupBy(res.data, ele => ele.ticketName.slice(-1)));

    for (const key in vendor) {
      const s = projConfig.sessions.find(ele => ele.id === key);
      if (s) {
        s.ticketTypes = vendor[key];
      }
    }
    setEvent(projConfig);
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div className='ui container'>
      <Grid container direction='row' spacing={24}>
        <Grid item md={6} xs={12}>
          {event ? <img src={cover} id='cover-img' alt='' /> : <ImgLoader />}
        </Grid>
        <Grid item md={6} xs={12}>
          {event ? (
            <InfoPanel event={event} history={history} />
          ) : (
            <PanelLoader />
          )}
        </Grid>
      </Grid>
      <Divider variant='middle' style={{ margin: '3em' }} />
      {event ? <EventContent event={event} /> : null}
    </div>
  );
}

/**
 * Place Holders when loading page
 */
const ImgLoader = props => (
  <ContentLoader
    height={475}
    width={400}
    speed={2}
    primaryColor='#f3f3f3'
    secondaryColor='#ecebeb'
    {...props}
  >
    <rect x='0' y='0' rx='5' ry='5' width='400' height='444' />
  </ContentLoader>
);

const PanelLoader = props => (
  <ContentLoader
    height={475}
    width={400}
    speed={2}
    primaryColor='#f3f3f3'
    secondaryColor='#ecebeb'
    {...props}
  >
    <rect x='0' y='0' rx='5' ry='5' width='400' height='40' />
    <circle cx='10' cy='70' r='8' />
    <rect x='25' y='65' rx='5' ry='5' width='220' height='10' />
    <circle cx='10' cy='100' r='8' />
    <rect x='25' y='95' rx='5' ry='5' width='220' height='10' />
    <circle cx='10' cy='130' r='8' />
    <rect x='25' y='125' rx='5' ry='5' width='220' height='10' />
    <circle cx='10' cy='160' r='8' />
    <rect x='25' y='155' rx='5' ry='5' width='220' height='10' />
  </ContentLoader>
);
