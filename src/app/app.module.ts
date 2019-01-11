import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import { Route } from '@angular/router/src/config';
import {FormsModule} from '@angular/forms'
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeesComponent } from './employees/display-employees.component';
// import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'

const appRoutes: Routes=[
  {path : 'list',component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeesComponent},
  {path: './', component : ListEmployeesComponent, pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeesComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes)
   // BsDatepickerModule.forRoot()
   
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
