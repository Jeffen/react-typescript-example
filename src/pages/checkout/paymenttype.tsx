import React from 'react';
import { Divider } from '@material-ui/core';

function PaymentType({ classes, handleChange, paymentTypeValue }) {
  const paymentTypes = [
    { value: 'ONLINEPAY', label: '在线支付' },
    { value: 'OFFLINEPAY', label: '预定-当面付' }
  ];

  return (
    <>
      <h3 className={classes.h3}>Payment Method</h3>
      <Divider className={classes.divider} />
      <div>
        {paymentTypes.map(ele => (
          <div className={classes.paymentButton} key={ele.value}>
            <input
              type='radio'
              value={ele.value}
              id={ele.value}
              name='paymentType'
              onChange={handleChange('paymentType')}
              checked={paymentTypeValue === ele.value}
              hidden
            />
            <label htmlFor={ele.value}>
              <div>{ele.label}</div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default PaymentType;
