// app.routes.ts
import { Routes } from '@angular/router';
import { Acceuil } from './pages/acceuil/acceuil';
import { Produits } from './pages/produits/produits';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { DetailProducts } from './pages/detail-products/detail-products';
import { Admin } from './pages/admin/admin';
import { authGuard } from './auth-guard';
import { PageIntrouvable } from './pages/page-introuvable/page-introuvable';
import { AdminDashboard } from './pages/admin/admin-dashboard/admin-dashboard';
import { AdminUsers } from './pages/admin/admin-users/admin-users';
import { AdminProduits } from './pages/admin/admin-produits/admin-produits';
export const routes: Routes = [
 // Redirection racine vers /accueil
 //{ path: '', redirectTo: 'accueil', pathMatch: 'full' },
 // Routes principales
 { path: 'accueil', component: Acceuil },
 { path: 'produits', component: Produits },
 { path: 'contact', component: Contact },
 { path: 'login', component: Login },
 // Route avec paramètre dynamique :id
 { path: 'produits/:id', component: DetailProducts },
 // Route protégée par un Guard
 
 { path: 'admin', 
    component: Admin,
    canActivate: [authGuard],
    children: [
        { path: '', component: AdminDashboard }, // /admin
        { path: 'users', component: AdminUsers }, // /admin/users
        { path: 'produits', component: AdminProduits }, // /admin/produits
 ]

},
/*
{ path: 'admin', component: Admin },
// ✅ Lazy Loading (chargé seulement si on va sur /admin)
{ path: 'admin',
 loadComponent: () =>
 import('././pages/admin/admin')
 .then(m => m.Admin),
 canActivate: [authGuard]
},*/
 // Wildcard — TOUJOURS EN DERNIER !
 { path: '**', component: PageIntrouvable },
]