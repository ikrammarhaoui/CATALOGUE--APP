// admin-dashboard.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../auth';
@Component({
 selector: 'app-admin-dashboard',
 standalone: true,
 imports: [],
 template: `
 <h2>🏠 Tableau de bord Admin</h2>
 <p>Bienvenue, <strong>{{ authService.getUtilisateur() }}</strong> !</p>
 <div class="stats">
 <div class="stat-card">Produits : 5</div>
 <div class="stat-card">Utilisateurs : 3</div>
 <div class="stat-card">Commandes : 12</div>
 </div>
 <button (click)="seDeconnecter()">
 🏠 Se déconnecter
 </button>
 `
})
export class AdminDashboard {
 constructor(
 public authService: Auth,
 private router: Router
 ) {}
 seDeconnecter(): void {
 this.authService.deconnecter();
 // Rediriger vers l'accueil après déconnexion
 this.router.navigate(['/accueil']);
 }
}