import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';
import { QuestionnaireComponent } from './questionnaire-list/questionnaire/questionnaire.component';
import { QuestionComponent } from './questionnaire-list/question-list/question/question.component';
import { QuestionListComponent } from './questionnaire-list/question-list/question-list.component';
import { PropositionListComponent } from './questionnaire-list/proposition-list/proposition-list.component';
import { PropositionComponent } from './questionnaire-list/proposition-list/proposition/proposition.component';
import { TestComponent } from './test/test.component';
import { QuestionnaireDisplayComponent } from './test/questionnaire-display/questionnaire-display.component';
import { QuestionDisplayComponent } from './test/questionnaire-display/question-display/question-display.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
