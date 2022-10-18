import { Routes } from "@angular/router";
import { DataBindComponent } from "./demos/data-bind/data-bind.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { AppListaBermudaComponent } from "./produtos/ListaDeBermudas/app-lista-bermuda.component";
import { ListaDeCamisa } from "./produtos/ListaDeCamisa/lista-Camisa.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'featur-data-binding', component: DataBindComponent },
    { path: 'camisas', component: ListaDeCamisa },
    { path: 'bermudas', component: AppListaBermudaComponent },
    { path: 'produto-detalhe/:id', component: ListaDeCamisa }
];