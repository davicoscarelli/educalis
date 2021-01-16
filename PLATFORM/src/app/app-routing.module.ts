import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCriarContaComponent } from './login/pages/form-criar-conta/form-criar-conta.component';
import { FormEsqueceuSenhaComponent } from './login/pages/form-esqueceu-senha/form-esqueceu-senha.component';
import { FormLoginComponent } from './login/pages/form-login/form-login.component';
import { PageComponent } from './page/page.component';
import { BoletimComponent } from './portal/boletim/boletim.component';
import { CalendariosComponent } from './portal/calendarios/calendarios.component';
import { DisciplinasComponent } from './portal/disciplinas/disciplinas.component';
import { MatematicaComponent } from './portal/disciplinas/matematica/matematica.component';
import { PortalComponent } from './portal/portal.component';


const routes: Routes = [
  {
    path: '',
    component: PageComponent
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        component: FormLoginComponent
      },
      {
        path: 'esqueceu-senha',
        component: FormEsqueceuSenhaComponent
      },
      {
        path: 'criar-conta',
        component: FormCriarContaComponent
      }
    ]
  },
  {
    path: 'portal',
    children: [
      {
        path: '',
        component: PortalComponent,
        children: [
          {
            path: '',
            redirectTo: 'disciplinas',
            pathMatch: 'full'
          },
          {
            path: 'disciplinas',
            children: [
              {
                path: '',
                component: DisciplinasComponent
              },
              {
                path: 'matematica',
                component: MatematicaComponent
              }
            ]
          },
          {
            path: 'calendarios',
            component: CalendariosComponent
          },
          {
            path: 'boletim',
            component: BoletimComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
