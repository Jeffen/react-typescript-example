import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

export function AppHeader() {
  return (
    <div className='app-header'>
      <AppBar position='static' color='default' elevation={1}>
        <Toolbar>123</Toolbar>
      </AppBar>
    </div>
  );
}
