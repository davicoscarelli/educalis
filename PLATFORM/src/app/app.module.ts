import { BrowserModule } from '@angular/platform-browser';
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
    ConteudosComponent
  ],
  imports: [
    BrowserModule,
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
