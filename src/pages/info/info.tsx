import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import ContentLoader from 'react-content-loader';

import cover from './img/cover.jpg';

import InfoPanel from './infopanel';

function Info({ history }) {
  const [event, setEvent] = useState(null);

  const fetchEventData = async () => {
    const result = await axios(
      `${process.env.PUBLIC_URL}/db/hysd2019/event.json`
    );
    setEvent(result.data);
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
          {event ? <InfoPanel event={event} /> : <PanelLoader />}
        </Grid>
      </Grid>
    </div>
  );
}

export default Info;

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
