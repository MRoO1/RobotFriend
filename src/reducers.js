import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';


// initial stat (initial object)
const initialStateSearch = {
    searchField: '',
}

// create Reducer that is pure function
//usng ES6 iLL give it default parameters
//this reduced concern is searching robots
export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, { searchField: action.payload });
        // return {...state, searchField: action.payload}
        default:
            return state;

    }
}

//req reducer

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}


export const reqRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true };
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isPending: false };
        case REQUEST_ROBOTS_FAILED:
            return { ...state, error: action.payload, isPending: false };
        default:
            return state;
    }

}