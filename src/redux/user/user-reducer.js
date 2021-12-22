const INITIAL_STATE = {
    currentUser: null
};

//state is something which the redux store is going to pass to the 
//reducer whenever an action fires. and the state will be in the current
//state whenever the action gets fired.
//
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_CURRENT_USER" :
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer;