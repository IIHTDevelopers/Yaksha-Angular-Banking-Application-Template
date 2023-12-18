import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../../models/beneficiary.model';

@Component({
  selector: 'app-beneficiary-management',
  templateUrl: './beneficiary-management.component.html',
  styleUrls: ['./beneficiary-management.component.css']
})
export class BeneficiaryManagementComponent implements OnInit {
  beneficiaries: Beneficiary[] = [];
  selectedBeneficiary: Beneficiary | null = null;
  isAddMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  loadBeneficiaries(): void {
  }

  openAddMode(): void {
  }

  openEditMode(beneficiary: Beneficiary): void {
  }

  saveBeneficiary(): void {
  }

  deleteBeneficiary(id: number): void {
  }

  cancelEdit(): void {
  }
}
