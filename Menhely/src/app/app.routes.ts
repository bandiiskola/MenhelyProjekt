import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';

export const routes: Routes = [
    {path:'', component: ListaComponent},
    {path: 'feltoltes', component: InputComponent }
];
