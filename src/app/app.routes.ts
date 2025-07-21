import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';



export const routes: Routes = [
     
     {
        path: "",
        pathMatch: "full",
        loadComponent: () =>
            import("./pages/home/home.component")
                .then(c => c.HomeComponent)
    },
    {
        path: "sobre",
        pathMatch: "full",
        loadComponent: () =>
            import("./pages/sobre/sobre.component")
                .then(c => c.SobreComponent)
    },
    {
        path: "menu",
        pathMatch: "full",
        loadComponent: () =>
            import("./pages/menu/menu.component")
                .then(c => c.MenuComponent)
    },
    {
        path: "receitas",
        pathMatch: "full",
        canActivate: [loginGuard],
        loadComponent: () =>
            import("./pages/receitas/receitas.component")
                .then(c => c.ReceitasComponent)
    },
    {
        path: "contato",
        pathMatch: "full",
        loadComponent: () =>
            import("./pages/contato/contato.component")
                .then(c => c.ContatoComponent)
    },
    {
        path: "login",
        pathMatch: "full",
        
        loadComponent: () =>
            import("./pages/login/login.component")
                .then(c => c.LoginComponent)
    },
    
];