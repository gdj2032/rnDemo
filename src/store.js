import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'key',
  storage: storage,
};

export default function createAppStore() {
  const store = createStore(
    persistReducer(config, rootReducer),
    applyMiddleware(thunk, logger),
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
