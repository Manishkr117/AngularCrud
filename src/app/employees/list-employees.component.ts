import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
// employees:Employee[]=[
    // {
    //   id:1,
    //   name:"Manish",
    //   gender:'M',
    //   email: "manishkr112@gmail.com",
    //   phoneNumber:8892291411,  
    //   contactPreferences:'email',
    //   dataOfBirth:new Date('03/02/1990'),
    //   department:'R & D',
    //   isActive:true,
    //   photoPath:'assets/Bike.jpg',
    //   password:'null',
    //   ConfirmPassword:'null'
    // },
    // {
    // id:2,
    // name:'Einstein',
    // gender:'M',
    // email:"einstein@gmail.com",
    // phoneNumber:8892291444,
    // contactPreferences:'SMS',
    // dataOfBirth:new Date('01/01/1900'),
    // department:'Heaven',
    // isActive:false,
    // photoPath:'assets/Q.jpg',
    // password:'null',
    // ConfirmPassword:'null'
    // },
    // {
    //   id:3,
    //   name:'Naveen',
    //   gender:'M',
    //   email:"naveen@gmail.com",
    //   phoneNumber:11542199,
    //   contactPreferences:'SMS',
    //   dataOfBirth:new Date('01/01/1980'),
    //   department:'Oncology',
    //   isActive:false,
    //   photoPath:'assets/Q.jpg',
    //   password:'null',
    //   ConfirmPassword:'null'
    //   }
//];

employees : Employee[];
employeeToDisplay:Employee;
private _arrayIndex=1;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
    this.employeeToDisplay=this.employees[0];
  }

  nextEmployee():void{
console.log('next button is clicked....');
    if(this._arrayIndex<=2){
      this.employeeToDisplay=this.employees[this._arrayIndex];
      this._arrayIndex++;
    }
    else{
      this.employeeToDisplay=this.employees[0];
      this._arrayIndex=1;
    }
  }
}
