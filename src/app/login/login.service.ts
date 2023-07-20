// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
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
    // Logique de connexion pour l'administrateur
    this.isAdminLoggedIn = true;
    this.isEmployeeLoggedIn = false; // Réinitialiser le statut de l'employé
  }

  loginEmployee() {
    // Logique de connexion pour l'employé
    this.isEmployeeLoggedIn = true;
    this.isAdminLoggedIn = false; // Réinitialiser le statut de l'administrateur
  }

  login(loginData: any) {
    const loginUrl = `${this.apiUrl}/auth/login`;

    // Envoi de la requête HTTP POST au backend avec les informations d'identification
    return this.http.post(loginUrl, loginData);
  }

  logout() {
    // Déconnexion : réinitialiser les statuts d'authentification
    this.isAdminLoggedIn = false;
    this.isEmployeeLoggedIn = false;
  }

}
