import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit,OnChanges {
  @Input() employeeId:number;
  private _employee:Employee;
@Input()
set employee(val:Employee){
  console.log('Previous :'+ (this._employee? this._employee.name: 'NULL'));
  
  this._employee=val;//here , we are setting employee to variable val
  console.log('Current : '+(this._employee.name));
}
get employee():Employee{
  return this._employee; //only after initializing get property we will be able to read
}
  constructor() { }

  ngOnInit() {
   // console.log(this.employee);
  }
  ngOnChanges(changes :SimpleChanges){
    console.log(changes);

    // const previousEmployee=<Employee>changes.employee.previousValue;
    // const currentEmployee=<Employee>changes.employee.currentValue;

    // console.log('Previous Employee  ' + (previousEmployee ? previousEmployee.name:'NULL'));
    // console.log('Current Employee  ' + (currentEmployee ? currentEmployee.name:'NULL'));
  }

}
