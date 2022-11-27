import { Component } from '@angular/core';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  data:any = [
    {
        "name":"Sherin",
        "designation" :"Software Engineer Trainee",
        "salary":30000,
        "Company":"Nest"
    
    },
    {
      "name":"Susan",
      "designation" :"Software Engineer Trainee",
      "salary":40000,
      "Company":"UST"
    },
  {
    "name":"Joel",
    "designation" :"Software Engineer Trainee",
    "salary":60000,
    "Company":"TCS"
  },
  {
    "name":"Anna",
    "designation" :"Software Engineer Trainee",
    "salary":90000,
    "Company":"UST"
  },
  {
    "name":"Sus",
    "designation" :"Software Engineer Trainee",
    "salary":70000,
    "Company":"JSU"
  },
  {
    "name":"Revi",
    "designation" :"Software Engineer Trainee",
    "salary":40000,
    "Company":"TCS"
  }
]
}

