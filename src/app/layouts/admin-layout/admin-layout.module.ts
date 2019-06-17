import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {Questionnaire} from '../../questionnaire-list/questionnaire/questionnaire.model';
import {QuestionnaireComponent} from '../../questionnaire-list/questionnaire/questionnaire.component';
import {QuestionnaireListComponent} from '../../questionnaire-list/questionnaire-list.component';
import {QuestionnaireService} from '../../questionnaire-list/questionnaire/questionnaire.service';
import {HttpClientModule} from '@angular/common/http';
import {QuestionComponent} from '../../questionnaire-list/question-list/question/question.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {QuestionService} from '../../questionnaire-list/question-list/question/question.service';
import {QuestionListComponent} from '../../questionnaire-list/question-list/question-list.component';
import {PropositionComponent} from '../../questionnaire-list/proposition-list/proposition/proposition.component';
import {PropositionListComponent} from '../../questionnaire-list/proposition-list/proposition-list.component';
import {PropositionService} from '../../questionnaire-list/proposition-list/proposition/proposition.service';
import {TestComponent} from '../../test/test.component';
import {TestService} from '../../test/test.service';
import {QuestionDisplayComponent} from '../../test/questionnaire-display/question-display/question-display.component';
import {QuestionnaireDisplayComponent} from '../../test/questionnaire-display/questionnaire-display.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    QuestionnaireComponent,
    QuestionComponent,
    QuestionListComponent,
      PropositionComponent,
      PropositionListComponent,
      TestComponent,
      QuestionDisplayComponent,
      QuestionnaireDisplayComponent
  ],
  exports: [
    QuestionComponent
  ],
  providers: [QuestionnaireService,
    QuestionService,
  PropositionService,
  TestService]
})

export class AdminLayoutModule {}
