import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

// Reducers
import order from './order/reducer';

// Epics
import orderEpics from './order/epics';

const rootEpic = combineEpics(...orderEpics);
const rootReducer = combineReducers({ order });

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);

  return store;
}
