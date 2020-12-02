
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import rootreducer from './reducers'
import { compose } from 'recompose'
const enhancer = compose(
	applyMiddleware(thunk, logger),
	window.__REDUX_DEVTOOLS_EXTENSION__
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: f => f
);

  const store = createStore(
    rootreducer,enhancer
    )

export default store;

