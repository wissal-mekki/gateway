"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var questionnaire_service_1 = require("./questionnaire.service");
var router_1 = require("@angular/router");
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
        core_1.Input(),
        __metadata("design:type", Number)
    ], QuestionnaireComponent.prototype, "nbques", void 0);
    QuestionnaireComponent = __decorate([
        core_1.Component({
            selector: 'app-questionnaire',
            templateUrl: './questionnaire.component.html',
            styleUrls: ['./questionnaire.component.scss']
        }),
        __metadata("design:paramtypes", [questionnaire_service_1.QuestionnaireService, router_1.Router])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());
exports.QuestionnaireComponent = QuestionnaireComponent;
//# sourceMappingURL=questionnaire.component.js.map