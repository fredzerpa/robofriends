import { 
    CHANGE_SEARCH_FIELD, REQUEST_ROBOT_FAILED, REQUEST_ROBOT_PENDING, REQUEST_ROBOT_SUCCESS
} from './constants';


const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload}
        default:
            return state
    }
}

const initialStateRequest = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRequest, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOT_PENDING:
            return {...state, isPending: true }
        case REQUEST_ROBOT_SUCCESS:
            return {...state, robots: action.payload, isPending: false }
        case REQUEST_ROBOT_FAILED:
            return {...state, error: action.payload, isPending: false }
        default:
            return state
    }
}