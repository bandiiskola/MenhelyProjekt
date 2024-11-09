import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { InputComponent } from './input/input.component';

export const routes: Routes = [
    {path:'', component: ListaComponent},
    {path: 'feltoltes', component: InputComponent},
    {path: 'modosit/:id', component: InputComponent },
];
