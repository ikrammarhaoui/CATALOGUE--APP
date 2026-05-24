import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Produit, ProduitService } from '../../produit.service';

@Component({
  selector: 'app-detail-products',
  imports: [RouterLink, CommonModule, CurrencyPipe],
  templateUrl: './detail-products.html',
  styleUrl: './detail-products.css',
})
export class DetailProducts implements OnInit{

 id: string = '';
 produit: Produit | undefined;
 
 constructor(
  private route: ActivatedRoute, // Accès aux paramètres de l'URL
  private produitService: ProduitService // Accès aux données
 ) {}
 
 ngOnInit(): void {
    // Lire le paramètre ':id' de l'URL courante
    this.id = this.route.snapshot.params['id'];
    // +this.id convertit la chaîne '5' en nombre 5
    this.produit = this.produitService.getById(+this.id);
    console.log('Produit demandé :', this.id, '→', this.produit?.nom);
 }

}
