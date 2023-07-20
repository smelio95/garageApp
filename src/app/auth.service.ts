// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private isAdminLoggedIn = false;
  private isEmployeeLoggedIn = false;

  constructor(private http: HttpClient) {}

  isLoggedInAsAdmin() {
    return this.isAdminLoggedIn;
  }

  isLoggedInAsEmployee() {
    return this.isEmployeeLoggedIn;
  }

  loginAdmin() {
    this.isAdminLoggedIn = true;
    this.isEmployeeLoggedIn = false; 
  }

  loginEmployee() {
    this.isEmployeeLoggedIn = true;
    this.isAdminLoggedIn = false; 
  }

  login(loginData: any) {
    const loginUrl = `${this.apiUrl}/auth/login`;
    return this.http.post(loginUrl, loginData);
  }

  logout() {
    this.isAdminLoggedIn = false;
    this.isEmployeeLoggedIn = false;
  }

}
