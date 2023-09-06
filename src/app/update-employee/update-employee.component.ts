import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  empId: number;
  employee: Employee = new Employee();

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId'];
    this.employeeService.getEmployeeById(this.empId).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
    
  }
 
  

  onSubmit(){

    this.employeeService.updateEmployee(this.empId, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
