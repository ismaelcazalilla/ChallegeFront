import { combineReducers } from 'redux';

const test = (state= 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  test: test
});

export default rootReducer;
