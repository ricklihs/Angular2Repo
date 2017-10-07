import { Component } from  '@angular/core';
@Component({
  selector: 'my-employee',
  // template: `<h1>Hello {{name}}</h1>`,// back charactor `` not ''
  templateUrl: 'app/employee/employee.component.html',
  
  styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent  {
    firstName: string = 'Rick';
    lastName: string = 'Lee';
    gender: string = 'Male';
    age: number = 18;
}
