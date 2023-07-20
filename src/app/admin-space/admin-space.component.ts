import { Component, OnInit } from '@angular/core';
import { AdminSpaceService } from './admin-space.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.css']
})
export class AdminSpaceComponent implements OnInit {
  email: string = '';
  password: string = '';
  adminData: any;

  constructor(private adminSpaceService: AdminSpaceService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.getAdminData();
  }

  isAdminLoggedIn() {
    return this.loginService.isLoggedInAsAdmin();
  }

  isEmployeeLoggedIn() {
    return this.loginService.isLoggedInAsEmployee();
  }

  logout(): void {
    this.loginService.logout();
  }

  onAddAdmin() {
    this.adminSpaceService.addAdmin(this.email, this.password).subscribe(
      (response) => {
        // Gérez la réponse du backend ici, par exemple, affichez un message de succès
        console.log('Nouvel administrateur ajouté avec succès');
        // Réinitialisez les champs du formulaire
        this.email = '';
        this.password = '';
        // Mettez à jour les données de l'administrateur après l'ajout
        this.getAdminData();
      },
      (error) => {
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur
        console.error('Erreur lors de l\'ajout de l\'administrateur', error);
      }
    );
  }

  getAdminData() {
    this.adminSpaceService.getAdmin().subscribe(
      (data) => {
        this.adminData = data;
        console.log(this.adminData); // Affiche les données de l'administrateur dans la console
      },
      (error) => {
        console.error(error); // Affiche les erreurs éventuelles dans la console
      }
    );
  }
}
