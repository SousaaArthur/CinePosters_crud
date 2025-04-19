import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PostersComponent } from './pages/posters/posters.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Inicio'
  },
  { 
    path: 'admin', 
    component: AdminComponent,
    title: 'Admin'
  },
  { 
    path: 'posters', 
    component: PostersComponent,
    title: 'Cartazes'
  },
  { 
    path: 'admin/form',
    component: FormComponent,
    title: 'Formulário'
  },
  { 
    path: 'admin/form/:id',
    component: FormComponent,
    title: 'Editar Formulário'
  }
];
