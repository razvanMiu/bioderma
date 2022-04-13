const api = (store) => (next) => (action) => {
  // if (action.request) {
  //   axios({ url: action.request.path, method: action.request.op })
  //     .then(response => {
  //       store.dispatch({
  //         type: action.type + '_SUCCESS',
  //         data: response.data
  //       })
  //     })
  //     .catch(error => {
  //       store.dispatch({
  //         type: action.type + '_FAIL',
  //         error: error
  //       })
  //     })
  //   return next({
  //     type: action.type + '_PENDING',
  //   })
  // } else {
  //   return next(action)
  // }
  return next(action);
};

export default api;
