import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormLoginComponent } from './login/pages/form-login/form-login.component';
import { IllustrationComponent } from './login/components/illustration/illustration.component';
import { FormCriarContaComponent } from './login/pages/form-criar-conta/form-criar-conta.component';
import { FormEsqueceuSenhaComponent } from './login/pages/form-esqueceu-senha/form-esqueceu-senha.component';
import { PortalComponent } from './portal/portal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisciplinasComponent } from './portal/disciplinas/disciplinas.component';
import { CalendariosComponent } from './portal/calendarios/calendarios.component';
import { BoletimComponent } from './portal/boletim/boletim.component';
import { MatematicaComponent } from './portal/disciplinas/matematica/matematica.component';
import { ConjuntosComponent } from './portal/disciplinas/matematica/conjuntos/conjuntos.component';
import { ConteudosComponent } from './portal/disciplinas/matematica/conteudos/conteudos.component';
import { ProfessoresComponent } from './portal/professores/professores.component';
import { ProfessoresMatematicaComponent } from './portal/professores/professores-matematica/professores-matematica.component';
import { ListaProfessoresComponent } from './portal/professores/lista-professores/lista-professores.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageMComponent } from './mobile/landing-page-m/landing-page-m.component';
import { FormLoginMComponent } from './mobile/login/form-login-m/form-login-m.component';
import { TelaInicialComponent } from './mobile/login/tela-inicial/tela-inicial.component';
import { FormEsqueceuSenhaMComponent } from './mobile/login/form-esqueceu-senha-m/form-esqueceu-senha-m.component';
import { FormCriarContaMComponent } from './mobile/login/form-criar-conta-m/form-criar-conta-m.component';
import { PortalMComponent } from './mobile/portal-m/portal-m.component';
import { DisciplinasMComponent } from './mobile/portal-m/disciplinas-m/disciplinas-m.component';
import { MatematicaMComponent } from './mobile/portal-m/disciplinas-m/matematica-m/matematica-m.component';
import { ConjuntosMComponent } from './mobile/portal-m/disciplinas-m/matematica-m/conjuntos-m/conjuntos-m.component';
import { ConteudosMComponent } from './mobile/portal-m/disciplinas-m/matematica-m/conteudos-m/conteudos-m.component';
import { CalendarioMComponent } from './mobile/portal-m/calendario-m/calendario-m.component';
import { CalendarioCompletoComponent } from './mobile/portal-m/calendario-m/calendario-completo/calendario-completo.component';
import { AtividadesComponent } from './mobile/portal-m/calendario-m/atividades/atividades.component';
import { BoletimMComponent } from './mobile/portal-m/boletim-m/boletim-m.component';
import { ProfessoresMComponent } from './mobile/portal-m/professores-m/professores-m.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    IllustrationComponent,
    FormCriarContaComponent,
    FormEsqueceuSenhaComponent,
    PortalComponent,
    DisciplinasComponent,
    CalendariosComponent,
    BoletimComponent,
    MatematicaComponent,
    ConjuntosComponent,
    ConteudosComponent,
    ProfessoresComponent,
    ProfessoresMatematicaComponent,
    ListaProfessoresComponent,
    LandingPageComponent,
    LandingPageMComponent,
    FormLoginMComponent,
    TelaInicialComponent,
    FormEsqueceuSenhaMComponent,
    FormCriarContaMComponent,
    PortalMComponent,
    DisciplinasMComponent,
    MatematicaMComponent,
    ConjuntosMComponent,
    ConteudosMComponent,
    CalendarioMComponent,
    CalendarioCompletoComponent,
    AtividadesComponent,
    BoletimMComponent,
    ProfessoresMComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
