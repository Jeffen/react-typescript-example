// import moment from 'dayjs';
import { Ticket } from '../shared/model';

// export function toStandardDate(timeStr: string): Date {
//   return moment(timeStr, 'YYYY-MM-DD HH:mm').toDate();
// }

export function calcSubtotal(ticket: Ticket): Ticket {
  const newT = { ...ticket };
  const rate = newT.coupon === 'HAPPY50' ? 0.5 : 1;
  newT.subtotal = Math.round(ticket.quantity * ticket.price * 100 * rate) / 100;
  return newT;
}
