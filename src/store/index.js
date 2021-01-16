import { createStore  } from 'redux';

import rootReducer from '../reducers/index';

export default function Store () {
    const store = createStore (    
      rootReducer
    )
    return store;
  };