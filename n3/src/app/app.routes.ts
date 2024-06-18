import { Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component'
import { ContatosComponent } from './components/contatos/contatos.component';
import { EditarComponent } from './components/editar/editar.component'

export const routes: Routes = [
  { path: '', redirectTo: '/contatos', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'editar/:id', component: EditarComponent },
];
