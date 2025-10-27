import { Routes } from '@angular/router';
import { Comp4 } from './componentas/comp4/comp4';
import { Comp3 } from './componentas/comp3/comp3';
import { Comp1 } from './componentas/comp1/comp1';
import { Comp2 } from './componentas/comp2/comp2';
import { NotFound } from './componentas/not-found/not-found';

export const routes: Routes = [
     {path:'comp1', component: Comp1},
   {path:'comp2', component: Comp2},
   {path:'comp1/:id', component: Comp1},
   {path:'comp4', component: Comp4},
   {path:'comp3', component: Comp3},
    {path:'', component: Comp1  },
   {path:'**', component: NotFound}
];
