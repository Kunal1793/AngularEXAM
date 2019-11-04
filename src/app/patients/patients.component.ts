import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import {Patients} from '../patients/patients.model'

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor(private operationsService: OperationsService) { }

  PatientsList: Patients[] = [];

  ngOnInit() {
    this.operationsService.GetPatientsList().subscribe(
      (PatientData) => {this.PatientsList = PatientData} );
  }

}
