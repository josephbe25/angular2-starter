import { createStore } from "redux"

function reducer(state: any, action: any){
    switch(action.type){
        case 'CHANGE_PERSON':
            return action.person;
        default:
            return state;
    }
}

export const ReduxStore = createStore(reducer)
