import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cinema } from "../interface/cinema";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>('http://localhost:3000/cinema');
  }
}
