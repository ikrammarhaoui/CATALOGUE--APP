import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  // inject() permet d'utiliser des services hors d'une classe
 const authService = inject(Auth);
 const router = inject(Router);
 if (authService.estConnecte()) {
 return true; // ✅ Accès autorisé
 }
 // ❌ Non connecté : rediriger vers /login
 console.log('Guard : accès refusé — redirection vers /login');
 return router.createUrlTree(['/login']);
};
