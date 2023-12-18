import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account: Account | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  loadAccountDetails(): void {
  }

  goToTransactions(): void {
  }

  goToBeneficiaries(): void {
  }
}
