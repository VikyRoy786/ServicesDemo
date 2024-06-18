import { Routes } from '@angular/router';
import { IronManComponent } from '../Component/iron-man/iron-man.component';
import { SpiderManComponent } from '../Component/spider-man/spider-man.component';

export const routes: Routes = [
    {path : "iron" , component:IronManComponent},
    {path : "spider" , component : SpiderManComponent}
];
