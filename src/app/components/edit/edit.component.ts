import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Account } from '../../models/Account';
import * as AccountStateActions from '../../state/account-state.actions'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private store: Store<{accountState:{accounts:Account[]}}>) { }

  ngOnInit() {
  }

  onSubmit(){
    const newAccount = new Account('newtest1','new2','new3','new4')
    this.store.dispatch(new AccountStateActions.AddAccount(newAccount))
  }

}
