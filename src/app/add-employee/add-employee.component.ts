import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  name=""
  designation=""
  salary=""
  Company=""

  readValues=()=>
  
    {
     let data:any={"name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "Company":this.Company}
      console.log(data)
 

    }



}
