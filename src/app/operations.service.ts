import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Patients} from './patients/patients.model'

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private Http: HttpClient) { }

  GetPatientsList() {
    return this.Http.get<Patients[]>('assets/Patients.json');
  }
}
