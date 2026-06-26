export const initialStore = () => {
  return {
    apiConnect: false,
    user: null,
    token: null,
  };
};

export const storeReducer = (store, action = {}) => {
  switch (action.type) {
    case 'set_api_connect':
      return {
        ...store,
        apiConnect: action.payload,
      };
    case 'set_user':
      return {
        ...store,
        user: action.payload,
      };
    case 'set_token':
      return {
        ...store,
        token: action.payload,
      };
    default:
      throw Error('Unknow action.');
  }
};
