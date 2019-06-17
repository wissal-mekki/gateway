var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { QuestionnaireComponent } from '../../questionnaire-list/questionnaire/questionnaire.component';
import { QuestionnaireService } from '../../questionnaire-list/questionnaire/questionnaire.service';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from '../../questionnaire-list/question-list/question/question.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuestionService } from '../../questionnaire-list/question-list/question/question.service';
import { QuestionListComponent } from '../../questionnaire-list/question-list/question-list.component';
var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(AdminLayoutRoutes),
                FormsModule,
                ChartsModule,
                NgbModule,
                ToastrModule.forRoot(),
                HttpClientModule,
                NgxPaginationModule
            ],
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
                QuestionListComponent
            ],
            exports: [
                QuestionComponent
            ],
            providers: [QuestionnaireService,
                QuestionService]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());
export { AdminLayoutModule };
//# sourceMappingURL=admin-layout.module.js.map