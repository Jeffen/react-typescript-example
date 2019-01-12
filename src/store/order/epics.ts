import { ofType, Epic } from 'redux-observable';
import { map } from 'rxjs/operators';
import { OrderActionTypes, AddTicketAction } from './action';

const addTicketEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType<AddTicketAction>(OrderActionTypes.ADD_TICKET),
    map(res => {
      const payload = res.payload as any;
      console.log(payload);
    })
  );

export default [addTicketEpic];
