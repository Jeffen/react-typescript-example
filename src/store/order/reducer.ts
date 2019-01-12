import { Order } from './model';
import { OrderActionTypes, OrderActionsUnion } from './action';
import { calcSubtotal } from '../../libs/utils';

const initialState: Order = {
  project: null,
  id: null,
  orderId: null,
  shipping: null,
  items: [],
  faceTotalAmount: null,
  totalAmount: null
};

export default function reducer(
  state = initialState,
  action: OrderActionsUnion
): Order {
  switch (action.type) {
    case OrderActionTypes.INIT: {
      const ticket = calcSubtotal(action.payload);
      return Object.assign({}, state, {
        items: [ticket],
        totalAmount: ticket.subtotal,
        subtotalAmount: ticket.facePrice
      });
    }

    default: {
      return state;
    }
  }
}
