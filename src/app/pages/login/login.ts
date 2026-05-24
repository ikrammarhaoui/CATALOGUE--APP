import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
 password = '';
 erreur = '';
 constructor(
 private router: Router, // Pour naviguer
 private authService: Auth // Pour gérer la connexion
 ) {}
 connecter(): void {
 // Validation simplifiée
 if (!this.email || !this.password) {
 this.erreur = 'Veuillez remplir tous les champs.';
 return;
 }
 // Simulation : tout email/mot de passe est accepté
 this.authService.connecter(this.email);
 // Navigation programmée vers /admin après connexion
 this.router.navigate(['/admin']);
 }
 annuler(): void {
 // Retourner à l'accueil sans se connecter
 this.router.navigate(['/accueil']);
 }

}
