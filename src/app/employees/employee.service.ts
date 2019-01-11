import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";

@Injectable() //This Injectable is required only if we have any injectable property ie when we are calling any external web service
export class EmployeeService{
private listEmployee:Employee[]=[
    {
        id:1,
        name:"Manish",
        gender:'M',
        email: "manishkr112@gmail.com",
        phoneNumber:8892291411,
        contactPreferences:'email',
        dataOfBirth:new Date('03/02/1990'),
        department:'5',
        isActive:true,
        photoPath:'assets/Bike.jpg',
        password:'null',
        ConfirmPassword:'null'
      },
      {
      id:2,
      name:'Einstein',
      gender:'M',
      email:"einstein@gmail.com",
      phoneNumber:8892291444,
      contactPreferences:'SMS',
      dataOfBirth:new Date('01/01/1900'),
      department:'3',
      isActive:false,
      photoPath:'assets/Q.jpg',
      password:'null',
      ConfirmPassword:'null'
      },
      {
        id:3,
        name:'Naveen',
        gender:'M',
        email:"naveen@gmail.com",
        phoneNumber:11542199,
        contactPreferences:'SMS',
        dataOfBirth:new Date('01/01/1980'),
        department:'1',
        isActive:false,
        photoPath:'assets/Q.jpg',
        password:'null',
        ConfirmPassword:'null'
        }
    ];
    getEmployees():Employee[]{
        return this.listEmployee;
    };


    save(employee:Employee)
    {
        this.listEmployee.push(employee);
    }

}