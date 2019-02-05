import { Action } from 'redux';
import { Ticket } from '../../shared/model';

export enum OrderActionTypes {
  INIT = '[Order] Init',
  ADD_TICKET = '[Order] Add Ticket',
  REMOVE_TICKET = '[Order] Remove Ticket',
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

export class RemoveTicketAction implements Action {
  readonly type = OrderActionTypes.REMOVE_TICKET;

  constructor(public payload: Ticket) {}
}

export class ResetOrder implements Action {
  readonly type = OrderActionTypes.RESET;

  constructor() {}
}

export class OrderError implements Action {
  readonly type = OrderActionTypes.ERROR;

  constructor(public payload: Response) {}
}

export type OrderActionsUnion =
  | InitOrderAction
  | ResetOrder
  | AddTicketAction
  | RemoveTicketAction
  | OrderError;
