import { Action } from '@ngrx/store';
import { Account } from '../models/Account';
export const ADD_ACCOUNT = 'ADD_ACCOUNT';

export class AddAccount implements Action {
    readonly type = ADD_ACCOUNT;
    constructor(public payload:Account){}
}

export type AccountStateActions = AddAccount;