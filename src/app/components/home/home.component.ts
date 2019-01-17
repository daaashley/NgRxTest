import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accounts:Observable<{accounts:Account[]}>
  constructor(private store:Store<{accountState:{accounts:Account[]}}>) { }

  ngOnInit() {
    this.accounts = this.store.select('accountState')
  }

}
