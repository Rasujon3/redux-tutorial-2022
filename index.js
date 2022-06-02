// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
  count: 0,
};

const initialUsersState = {
  users: [{ name: "anisul islam" }],
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

const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "shakil" },
  };
};

// incrementCounter()

// 1. state
// 2. dispatch -> action
// 3. reducer -> based on action
// 4. store update
