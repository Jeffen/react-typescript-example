import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import styles from './styles';

import Summary from './summary';
import OrderForm from './orderform';
import PaymentType from './paymenttype';

function Checkout({ history, classes, order, dispatch }) {
  const [orderForm, setOrderForm] = useState({
    firstName: '',
    lastName: '',
    cell: '',
    email: '',
    location: 1123,
    paymentType: 'ONLINEPAY'
  });

  const handleChange = name => event => {
    setOrderForm({ ...orderForm, [name]: event.target.value });
  };

  return (
    <div className='ui container'>
      <form>
        <OrderForm classes={classes} handleChange={handleChange} />
        <PaymentType
          classes={classes}
          handleChange={handleChange}
          paymentTypeValue={orderForm.paymentType}
        />
      </form>
      <Summary
        dispatch={dispatch}
        order={order}
        classes={classes}
        formValue={orderForm}
      />
    </div>
  );
}

const mapStateToProps = state => ({ order: state.order });
export default withStyles(styles)(connect(mapStateToProps)(Checkout));
