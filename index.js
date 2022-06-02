// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state
const initialCounterState = {
  count: 0,
};

// action - Object -> i. type, ii. payload
// INCREMENT COUNTER
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// DECREMENT COUNTER
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// create reducer for counter
// reducer = pure function(je function input niye definatly output return kore)
// reducer er kaj = ja ja logic ase, ta handle kore, state update kora
// update korbe kar upor base kore?=action er type er upor based kore
// reducer = pure function, logic handle krbe action type er upor vitti kore

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
      break;
  }
};

// 1. state
// 2. dispatch -> action
// 3. reducer -> based on action
// 4. store update
