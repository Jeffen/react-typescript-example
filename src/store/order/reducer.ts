import { Order } from '../../shared/model';
import { OrderActionTypes, OrderActionsUnion } from './action';
import { calcSubtotal } from '../../libs/utils';
import reduce from 'lodash/reduce';
import remove from 'lodash/remove';

const initialState: Order = {
  projectId: null,
  id: null,
  orderId: null,
  shipping: null,
  items: [],
  faceTotalAmount: null,
  totalAmount: null
};

export function reducer(
  state = initialState,
  action: OrderActionsUnion
): Order {
  switch (action.type) {
    case OrderActionTypes.INIT: {
      const payload = action.payload;
      return Object.assign(state, {
        projectId: payload.projectId,
        title: payload.title
      });
    }

    case OrderActionTypes.ADD_TICKET: {
      const payload = action.payload;
      let items = [...state.items];
      const identifier = ele =>
        ele.ticketName === payload.ticketName && ele.coupon === payload.coupon;
      const existTicket = items.find(identifier);
      // check if vendor exist
      if (existTicket) {
        const newQty = existTicket.quantity + payload.quantity;
        if (newQty > 0 && newQty <= Math.min(existTicket.restQuantity, 10)) {
          existTicket.quantity += payload.quantity;
          Object.assign(existTicket, calcSubtotal(existTicket));
        }
      } else {
        items = [...state.items, calcSubtotal(payload)];
      }

      const faceTotalAmount = reduce(
        items,
        (sum, n) => sum + n.facePrice * n.quantity,
        0
      );
      const totalAmount = reduce(items, (sum, n) => sum + n.subtotal, 0);

      return { ...state, items, totalAmount, faceTotalAmount };
    }

    case OrderActionTypes.REMOVE_TICKET: {
      const payload = action.payload;
      const items = [...state.items];
      const identifier = ele =>
        ele.ticketName === payload.ticketName && ele.coupon === payload.coupon;
      remove(items, identifier);

      const faceTotalAmount = reduce(
        items,
        (sum, n) => sum + n.facePrice * n.quantity,
        0
      );
      const totalAmount = reduce(items, (sum, n) => sum + n.subtotal, 0);

      return { ...state, items, totalAmount, faceTotalAmount };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
