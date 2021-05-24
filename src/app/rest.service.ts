import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class Employee {
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url = 'http://localhost:3001/api/v1/employees/';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}
