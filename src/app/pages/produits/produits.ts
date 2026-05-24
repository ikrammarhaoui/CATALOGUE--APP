import { Component, OnInit } from '@angular/core';
import { Produit, ProduitService } from '../../produit.service';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produits',
  imports: [RouterLink, CommonModule, CurrencyPipe],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
  standalone: true
})
export class Produits implements OnInit{
 produits: Produit[] = [];

 constructor(private produitService: ProduitService) {}
 
 ngOnInit(): void {
  this.produits = this.produitService.getAll();
 }

}
