let initialState = { currentNumber: 1000 };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'RESET':
      return initialState;
    case 'CHANGE':
      return { currentNumber: (Math.random() * 5) };
    default:
      return state;
  }
};
