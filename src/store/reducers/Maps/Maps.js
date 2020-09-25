import initialStates from './cursinhos';

function reducer(state = initialStates, actions) {
  switch (actions.type) {
    case "CLICK":
      return {
        ...state,
        click: {
          Name: actions.Name,
          State: actions.State,
          City: actions.City,
          Neighborhood: actions.Neighborhood,
          Street: actions.Street,
          Number: actions.Number,
          Compements: actions.Compements,
          Site: actions.Site,
        },
      };

    default:
      return state;
  }
}

export default reducer;
