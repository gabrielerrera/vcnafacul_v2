const initialStates = {
  click: { id: 1, name: "Qualquercoisa" },
  cursinho: [
    { id: 1, name: "Casa Gabs", lat: -22.702734 , long: -47.36938 },
    { id: 2, name: "Casa Fer", lat:-23.5496976, long: -46.6342887 },
    { id: 3, name: "Casa Iago", lat:-21.7747095, long: -48.1825766 }
  
  ]
}

function reducer(state = initialStates, actions) {
  switch (actions.type) {

    case "CLICK":
      return {
        ...state, click: {id: actions.id, name: actions.name}
      }


    default:
      return state;
  }
}

export default reducer;