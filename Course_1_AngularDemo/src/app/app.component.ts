import { Component } from  '@angular/core';
@Component({
  selector: 'my-app',
  template: `<div>
                <h1>{{'Page header='}}{{pageHeader ? pageHeader : 'No Page Header'}}</h1>
               
                <my-employee></my-employee>
            </div>
            <br/>
            <div><h1>{{'Fullname='+getFullName()}}</h1></div>
            <img src='{{imgPath}}'/>
            `
})
export class AppComponent  {
    pageHeader:string = 'Employee Details';
   
    //pageHeader: string = null;
    firstName: string = 'Tom';
    lastName: string = 'HH';
    getFullName(): string {

        return this.firstName +' '+ this.lastName;
    };
    imgPath: string = '../images/blackHorse.jpg';
}
