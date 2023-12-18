import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];
  beneficiaries: any[] = [];
  selectedBeneficiary: any;
  amount: number = 0;
  transactionForm!: FormGroup;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  loadTransactions(): void {
  }

  loadBeneficiaries(): void {
  }

  createTransaction(beneficiaryId: number, amount: number): void {
  }

  transferMoney(): void {
  }
}
