import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminSpaceService {
  private apiUrl = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) {}

  addAdmin(email: string, password: string) {
    // Envoi de la requête HTTP POST au backend pour ajouter un nouvel administrateur
    return this.http.post(this.apiUrl, { email, password });
  }

  getAdmin() {
    // Envoi de la requête HTTP GET au backend pour récupérer les données de l'administrateur
    return this.http.get(this.apiUrl);
  }
}
