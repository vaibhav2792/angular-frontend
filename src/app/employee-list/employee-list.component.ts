import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees:Employee[];
  firstName:any;
  lastName:any;

  constructor(private employeeService:EmployeeService,private router:Router){}


  ngOnInit(): void {

    this.getEmployees();
}
private getEmployees(){
  this.employeeService.getEmployeesList().subscribe(data => {
    this.employees = data;
  });
}

updateEmployee(empId: number){
  this.router.navigate(['update-employee', empId]);
}

deleteEmployee(empId: number){
  this.employeeService.deleteEmployee(empId).subscribe( data => {
    console.log(data);
    this.getEmployees();
  })
}
search(){

  if(this.firstName ==""){
    this.ngOnInit();
  }
  else{
    this.employees=this.employees.filter(res=>{
      return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
    })
  }

}

 
}
