import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormCriarContaComponent } from './login/pages/form-criar-conta/form-criar-conta.component';
import { FormEsqueceuSenhaComponent } from './login/pages/form-esqueceu-senha/form-esqueceu-senha.component';
import { FormLoginComponent } from './login/pages/form-login/form-login.component';
import { LandingPageMComponent } from './mobile/landing-page-m/landing-page-m.component';
import { FormCriarContaMComponent } from './mobile/login/form-criar-conta-m/form-criar-conta-m.component';
import { FormEsqueceuSenhaMComponent } from './mobile/login/form-esqueceu-senha-m/form-esqueceu-senha-m.component';
import { FormLoginMComponent } from './mobile/login/form-login-m/form-login-m.component';
import { TelaInicialComponent } from './mobile/login/tela-inicial/tela-inicial.component';
import { BoletimMComponent } from './mobile/portal-m/boletim-m/boletim-m.component';
import { AtividadesComponent } from './mobile/portal-m/calendario-m/atividades/atividades.component';
import { CalendarioCompletoComponent } from './mobile/portal-m/calendario-m/calendario-completo/calendario-completo.component';
import { CalendarioMComponent } from './mobile/portal-m/calendario-m/calendario-m.component';
import { DisciplinasMComponent } from './mobile/portal-m/disciplinas-m/disciplinas-m.component';
import { ConjuntosMComponent } from './mobile/portal-m/disciplinas-m/matematica-m/conjuntos-m/conjuntos-m.component';
import { ConteudosMComponent } from './mobile/portal-m/disciplinas-m/matematica-m/conteudos-m/conteudos-m.component';
import { MatematicaMComponent } from './mobile/portal-m/disciplinas-m/matematica-m/matematica-m.component';
import { PortalMComponent } from './mobile/portal-m/portal-m.component';
import { ProfessoresMComponent } from './mobile/portal-m/professores-m/professores-m.component';
import { BoletimComponent } from './portal/boletim/boletim.component';
import { CalendariosComponent } from './portal/calendarios/calendarios.component';
import { DisciplinasComponent } from './portal/disciplinas/disciplinas.component';
import { ConjuntosComponent } from './portal/disciplinas/matematica/conjuntos/conjuntos.component';
import { ConteudosComponent } from './portal/disciplinas/matematica/conteudos/conteudos.component';
import { MatematicaComponent } from './portal/disciplinas/matematica/matematica.component';
import { PortalComponent } from './portal/portal.component';
import { ListaProfessoresComponent } from './portal/professores/lista-professores/lista-professores.component';
import { ProfessoresMatematicaComponent } from './portal/professores/professores-matematica/professores-matematica.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
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
                component: MatematicaComponent,
                children: [
                  {
                    path: '',
                    component: ConteudosComponent
                  },
                  {
                    path: 'conjuntos',
                    component: ConjuntosComponent
                  }
                ]
              },
            ]
          },
          {
            path: 'calendarios',
            component: CalendariosComponent
          },
          {
            path: 'boletim',
            component: BoletimComponent
          },
          {
            path: 'professores',
            children: [
              {
                path: '',
                component: ListaProfessoresComponent
              },
              {
                path: 'matematica',
                component: ProfessoresMatematicaComponent,
              }
            ]
          },
        ]
      },
    ]
  },
  {
    path: 'm',
    children: [
      {
        path: '',
        component: LandingPageMComponent
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            component: TelaInicialComponent
          },
          {
            path: 'login',
            component: FormLoginMComponent
          },
          {
            path: 'esqueceu-senha',
            component: FormEsqueceuSenhaMComponent
          },
          {
            path: 'criar-conta',
            component: FormCriarContaMComponent
          }
        ]
      },
      {
        path: 'portal',
        children: [
          {
            path: '',
            component: PortalMComponent,
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
                    component: DisciplinasMComponent
                  },
                  {
                    path: 'matematica',
                    component: MatematicaMComponent,
                    children: [
                      {
                        path: '',
                        component: ConteudosMComponent
                      },
                      {
                        path: 'conjuntos',
                        component: ConjuntosMComponent
                      }
                    ]
                  },
                ]
              },
              {
                path: 'calendarios',
                component: CalendarioMComponent,
                children: [
                  {
                    path: '',
                    component: CalendarioCompletoComponent
                  },
                  {
                    path: 'atividades',
                    component: AtividadesComponent
                  }
                ]
              },
              {
                path: 'boletim',
                component: BoletimMComponent
              },
              {
                path: 'professores',
                component: ProfessoresMComponent
              },
            ]
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
