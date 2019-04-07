import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Offering} from '../models/offering';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  retrieveOfferings(): Observable<any> {
    return this.http.get<any>(`${environment.apiHome}/offerings`);
  }
}

