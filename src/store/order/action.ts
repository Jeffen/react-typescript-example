import { Action } from 'redux';
import { Ticket } from '../../shared/model';

export enum OrderActionTypes {
  INIT = '[Order] Init',
  ADD_TICKET = '[Order] Add Ticket',
  REMOVE_TICKET = '[Order] Remove Ticket',
  APPLY_COUPON = '[Order] Apply Coupon',
  CLEAR_COUPON = '[Order] Clear Coupon',
  RESET = '[Order] Reset',
  ERROR = '[Order] Error'
}

export class InitOrderAction implements Action {
  readonly type = OrderActionTypes.INIT;

  constructor(public payload: Ticket) {}
}

export class AddTicketAction implements Action {
  readonly type = OrderActionTypes.ADD_TICKET;

  constructor(public payload: Ticket) {}
}

export class ErrorAction implements Action {
  readonly type = OrderActionTypes.ERROR;

  constructor(public payload: string) {}
}

export type OrderActionsUnion = InitOrderAction | AddTicketAction;
