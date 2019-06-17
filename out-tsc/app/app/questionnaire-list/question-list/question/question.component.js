var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { QuestionnaireService } from '../../questionnaire/questionnaire.service';
import { QuestionService } from './question.service';
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(questionhttp, questionnairehttp) {
        this.questionhttp = questionhttp;
        this.questionnairehttp = questionnairehttp;
        this.p = 1;
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent.prototype.addQuestion = function (question) {
        var questiona = {
            'sujet': question['sujet'],
            'nbques': question['nbques']
        };
        this.questionhttp.addQuestion(questiona).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    QuestionComponent = __decorate([
        Component({
            selector: 'app-question',
            templateUrl: './question.component.html',
            styleUrls: ['./question.component.scss']
        }),
        __metadata("design:paramtypes", [QuestionService, QuestionnaireService])
    ], QuestionComponent);
    return QuestionComponent;
}());
export { QuestionComponent };
//# sourceMappingURL=question.component.js.map