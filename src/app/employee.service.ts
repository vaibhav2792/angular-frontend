import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  private baseURL="http://localhost:8081/employee";

  constructor(private httpClient:HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(empId: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${empId}`);
  }

  updateEmployee(empId: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${empId}`, employee);
  }

  deleteEmployee(empId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${empId}`);
  }
}
