import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {QuestionnaireComponent} from '../../questionnaire-list/questionnaire/questionnaire.component';
import {QuestionListComponent} from '../../questionnaire-list/question-list/question-list.component';
import {QuestionComponent} from '../../questionnaire-list/question-list/question/question.component';
import {PropositionListComponent} from '../../questionnaire-list/proposition-list/proposition-list.component';
import {PropositionComponent} from '../../questionnaire-list/proposition-list/proposition/proposition.component';
import {TestComponent} from '../../test/test.component';
import {QuestionDisplayComponent} from '../../test/questionnaire-display/question-display/question-display.component';
import {QuestionnaireDisplayComponent} from '../../test/questionnaire-display/questionnaire-display.component';
import {OfferComponent} from '../../offer-list/offer/offer.component';
import {OfferListComponent} from '../../offer-list/offer-list.component';
import {ApplicationComponent} from '../../application-list/application/application.component';
import {QuestionnaireListComponent} from '../../questionnaire-list/questionnaire-list.component';
import {UserComponent} from '../../user/user.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: QuestionnaireComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'questions',  component: QuestionListComponent },
    { path: 'question',  component: QuestionComponent },
    { path: 'propositions',  component: PropositionListComponent },
    { path: 'proposition',  component: PropositionComponent },
    { path: 'test',  component: TestComponent },
    { path: 'quest-disp',  component: QuestionnaireDisplayComponent},
    { path: 'question-disp',  component: QuestionDisplayComponent },
    { path: 'offers',  component: OfferListComponent },
    { path: 'application',  component: ApplicationComponent },
    { path: 'questionnaires',  component: QuestionnaireListComponent }
    ];
