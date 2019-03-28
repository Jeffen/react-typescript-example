import React from 'react';
import { IconButton, Divider, Icon, Button } from '@material-ui/core';
import { Ticket } from '../../shared/model';
import { AddTicketAction, RemoveTicketAction } from '../../store/order';
import classNames from 'classnames';

import PayButton from './paybutton';

function Summary({ classes, order, dispatch, formValue }) {
  const changeQuantity = (item: Ticket, qty: number) => {
    const newQty = item.quantity + qty;
    if (newQty > 0 && newQty <= item.restQuantity) {
      const payload = { ...item, quantity: qty };
      dispatch({ ...new AddTicketAction(payload) });
    }
  };

  const removeTicket = (item: Ticket) => {
    dispatch({ ...new RemoveTicketAction(item) });
  };

  const onlineBtnClass = classNames(classes.payButton, {
    show: formValue.paymentType === 'ONLINEPAY',
    disabled: formValue.disabled
  });

  const offlineBtnClass = classNames(classes.payButton, {
    show: formValue.paymentType === 'OFFLINEPAY',
    disabled: formValue.disabled
  });

  return (
    <>
      <h3 className={classes.h3}>Order Summary</h3>
      <Divider className={classes.divider} />
      <div>
        <div className={classes.summaryTitle}>《{order.title}》</div>
        <table className={classes.summaryTable}>
          <thead>
            <tr>
              <th scope='col'>Date</th>
              <th scope='col'>Price</th>
              <th scope='col'>Quantity</th>
              <th scope='col' className='subtotal'>
                Subtotal
              </th>
              <th scope='col' className='action'>
                {/*Action*/}
              </th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((ele, index) => (
              <tr key={index}>
                <td data-label='Date'>{ele.date}</td>
                <td data-label='Price'>{ele.facePrice.toFixed(2)}</td>
                <td data-label='Quantity' className='quantity'>
                  <div>
                    <div>
                      <IconButton onClick={() => changeQuantity(ele, -1)}>
                        <Icon>remove</Icon>
                      </IconButton>
                    </div>
                    <div>{ele.quantity}</div>
                    <div>
                      <IconButton
                        color='primary'
                        onClick={() => changeQuantity(ele, 1)}
                      >
                        <Icon>add</Icon>
                      </IconButton>
                    </div>
                  </div>
                </td>
                <td data-label='Subtotal' className='subtotal'>
                  {ele.subtotal.toFixed(2)}
                </td>
                <td className='action' onClick={() => removeTicket(ele)}>
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Divider />
        <div className={classes.summaryTotal}>
          {order.totalAmount - order.faceTotalAmount ? (
            <div className='subtotal text'>
              Discount
              <span>
                ${(order.totalAmount - order.faceTotalAmount).toFixed(2)} CAD
              </span>
            </div>
          ) : null}
          <div className='text total'>
            Total <span>${order.totalAmount} CAD</span>
          </div>
        </div>
        <div className={onlineBtnClass}>
          <PayButton />
        </div>
        <div className={offlineBtnClass}>
          <Button variant='contained' color='primary' size='large'>
            Submit
          </Button>
        </div>
        <div className={classes.disclaimer}>
          *If you have any problem, please contact customer service:
          1-800-688-9838.
        </div>
      </div>
    </>
  );
}

export default Summary;
