import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true
})
export class Contact {
nom = '';
 email = '';
 message = '';
 constructor(private router: Router) {}
 envoyer(): void {
 if (this.nom && this.email && this.message) {
 console.log('Message envoyé :', { nom: this.nom, email: this.email });
 // Naviguer vers l'accueil après envoi
 this.router.navigate(['/accueil']);
 }
 }
 // Navigation avec query params
 rechercherProduit(terme: string): void {
 this.router.navigate(['/produits'], {
 queryParams: { q: terme, tri: 'prix' }
 });
 // Génère : /produits?q=laptop&tri=prix
 }

}
