const initialState = {
  message: 'hello world'
};

export { initialState };

const app = (state = initialState, { type, ...payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default app;
