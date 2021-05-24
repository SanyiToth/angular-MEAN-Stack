import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {Employee} from '../employe.interface';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  employees: Employee[] = [];
  errorMsg = '';
  columns = ['Employee Id', 'Name', 'Age', 'Salary', 'Designation'];
  index = ['_id', 'name', 'age', 'salary', 'designation'];

  constructor(private rest: RestService) {
  }

  ngOnInit(): void {
    this.rest.getEmployees().subscribe(resp => {
        console.log('getEmployees()', resp);
        this.employees = resp;
      }, error => {
        this.errorMsg = error;
      }
    );

  }

}
