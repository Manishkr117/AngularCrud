import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

 
  constructor(private _employeeService:EmployeeService,private _router:Router) { 

  }

  ngOnInit() {
 
  }

  employee:Employee = {
    id: null,
    name:null,
    gender:null,
    email:'',
    phoneNumber:null,
    contactPreferences:'null',
    dataOfBirth:null,
    department:'-1',
    isActive:null,
    photoPath:null,
    password:null,
    ConfirmPassword:null
  };

  departments:Department[]
    =[
      {id:1,name:'IT'},
      {id:2,name:'HR'},
      {id:3,name:'Finance'},
      {id:4,name:'Help Desk'},
      {id:5,name:'R & D'}

    ];
    previewPhoto=false;
  gender='female';
  isActive=true;
  buttonText='Show Preview';
  contactPreferences='Email';
  // department=2;
  // saveEmployee(EmployeeForm: NgForm){
  
  //   console.log(EmployeeForm.value);

  //   console.log(EmployeeForm);
  // }

  saveEmployee(){
  
     console.log(this.employee.name);

    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
  

  togglePhotoPreview(){
    console.log('Preview Photo event got fired');
    if(this.previewPhoto)
    {
    this.previewPhoto=false;
    this.buttonText='Show Preview';
    }
    else{
    this.previewPhoto=true;
    this.buttonText='Hide Preview';
    }
  }
}
