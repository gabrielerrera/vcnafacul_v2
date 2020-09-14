const initialStates = { firstName: "iago", email: "emaildoiago@top.com.br" };

function reducer(state = initialStates, actions) {
  switch (actions.type) {
    case "CHANGE":
      return {...state, firstName: actions.user}
    default:
      return state;
  }
}

export default reducer;
