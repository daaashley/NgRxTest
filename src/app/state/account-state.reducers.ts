import {Action} from '@ngrx/store';
import * as AccountStateActions from '../state/account-state.actions'
import {Account} from '../models/Account';
export const ADD_ACCOUNT = "ADD_ACCOUNT";

const initialState = {
    accounts: [
        new Account('sessionToken','accountNumber','brokerAccountId','userAccountId'),
        new Account('test1','test2','test3','test4')
        
    ]
}

export function accountStateReducer(state=initialState,action:AccountStateActions.AccountStateActions){
    switch(action.type){
        case AccountStateActions.ADD_ACCOUNT:
            return {
                ...state,
                accounts:[...state.accounts,action.payload]
            }
        default:
            return state;
    }
}