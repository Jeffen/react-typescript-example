import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Axios from 'axios';

export function AppHeader() {
  const [env, setEnv] = useState<string>('');

  const fetchEventData = async () => {
    const env = await Axios(
      `${process.env.REACT_APP_PUBLIC_URL}/api/order/getId`
    ).then(res => res.data.result);
      setEnv(env);
  }

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div className='app-header'>
      <AppBar position='static' color='default' elevation={1}>
        <Toolbar>{env}</Toolbar>
      </AppBar>
    </div>
  );
}
