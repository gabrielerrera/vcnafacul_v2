const initialStates = {
    firstName: "",
    email: "",
    token: "",
    statusLogin: true,
    isTeacher: false
};

function reducer(state = initialStates, actions) {
    switch (actions.type) {
        case "CHANGE":
            return {...state, firstName: actions.user };
        default:
            return state;
    }
}

export default reducer;