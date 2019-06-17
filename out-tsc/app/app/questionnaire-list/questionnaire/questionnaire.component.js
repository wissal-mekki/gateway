var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';
import { Router } from '@angular/router';
var QuestionnaireComponent = /** @class */ (function () {
    function QuestionnaireComponent(questionnairehttp, router) {
        this.questionnairehttp = questionnairehttp;
        this.router = router;
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
    };
    QuestionnaireComponent.prototype.addQuestionnaire = function (questionnaire) {
        /* this.nbques=questionnaire['nbques'];
         console.log(this.nbques);*/
        this.questionnairehttp.SetNumber(this.nbques);
        var questionnairea = {
            'sujet': questionnaire['sujet'],
            'nbques': questionnaire['nbques']
        };
        this.questionnairehttp.addQuestionnaire(questionnairea).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        this.router.navigate(['/questions']);
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], QuestionnaireComponent.prototype, "nbques", void 0);
    QuestionnaireComponent = __decorate([
        Component({
            selector: 'app-questionnaire',
            templateUrl: './questionnaire.component.html',
            styleUrls: ['./questionnaire.component.scss']
        }),
        __metadata("design:paramtypes", [QuestionnaireService, Router])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());
export { QuestionnaireComponent };
//# sourceMappingURL=questionnaire.component.js.map