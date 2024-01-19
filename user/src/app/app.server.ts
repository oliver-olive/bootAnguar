import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppServer {
  private apiUrl = 'http://localhost:8080/all';
  constructor(private http: HttpClient) {}
  getUser(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  deleteUser(id: number): Observable<void> {
    const url = `http://localhost:8080/user/${id}`;
    return this.http.delete<void>(url);
  }
  addUser(newUser: any) {
    const addUrl = 'http://localhost:8080/users';
    return this.http.post<any>(addUrl, newUser);
  }
  updateUser(updateUser: any): Observable<any> {
    return this.http.put(this.apiUrl, updateUser);
  }
}
