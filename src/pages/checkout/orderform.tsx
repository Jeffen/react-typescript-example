import React from 'react';
import { Grid, Divider, TextField } from '@material-ui/core';

function OrderForm({ classes, handleChange }) {
  const currencies = [
    {
      value: '1123',
      label: '(Headquarters) 1123 Leslie Street, Toronto'
    },
    {
      value: '5140',
      label: '(North York) 5140 Yonge Street, Level 5, North York'
    },
    {
      value: '96',
      label: '(Markham) 96 Steelcase Rd West, Markham'
    }
  ];

  return (
    <>
      <h3>Order information</h3>
      <Divider className={classes.divider} />
      <Grid container direction='row' spacing={16}>
        <Grid item xs={12} sm={6}>
          <TextField
            label='First Name'
            variant='outlined'
            onChange={handleChange('firstName')}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Last Name'
            variant='outlined'
            onChange={handleChange('lastName')}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Phone Number'
            type='tel'
            variant='outlined'
            onChange={handleChange('cell')}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Email'
            type='email'
            variant='outlined'
            onChange={handleChange('email')}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Pick up location'
            variant='outlined'
            onChange={handleChange('location')}
            SelectProps={{
              native: true
            }}
            select
            fullWidth
            required
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </>
  );
}

export default OrderForm;
