import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { QuestionnaireComponent } from '../../questionnaire-list/questionnaire/questionnaire.component';
import { QuestionListComponent } from '../../questionnaire-list/question-list/question-list.component';
import { QuestionComponent } from '../../questionnaire-list/question-list/question/question.component';
export var AdminLayoutRoutes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: QuestionnaireComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'questions', component: QuestionListComponent },
    { path: 'question', component: QuestionComponent },
];
//# sourceMappingURL=admin-layout.routing.js.map