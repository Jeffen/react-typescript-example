import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

// Reducers
import order from './order/reducer';

// Epics
import orderEpics from './order/epics';

const rootEpic = combineEpics(...orderEpics);
const rootReducer = combineReducers({ order });

const epicMiddleware = createEpicMiddleware();
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);

  return store;
}
