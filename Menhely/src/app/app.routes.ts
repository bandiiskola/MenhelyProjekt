import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { InputComponent } from './input/input.component';
import { FooldalComponent } from './fooldal/fooldal.component';

export const routes: Routes = [
    {path:'lista', component: ListaComponent},
    {path: 'feltoltes', component: InputComponent},
    {path: 'modosit/:id', component: InputComponent },
    {path:'', component: FooldalComponent},
];
