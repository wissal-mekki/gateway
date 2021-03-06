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
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var apiUrl = 'http://localhost:8080/api';
var QuestionnaireService = /** @class */ (function () {
    function QuestionnaireService(httpclient) {
        this.httpclient = httpclient;
    }
    QuestionnaireService.prototype.SetNumber = function (nbques) {
        this.nbques = nbques;
    };
    QuestionnaireService.prototype.GetNumber = function () {
        return this.nbques;
    };
    QuestionnaireService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    QuestionnaireService.prototype.getQuestionnaire = function (id) {
        var url = apiUrl + "/questionnaire/";
        return this.httpclient.get(url + id, httpOptions).pipe(operators_1.map(this.extractData));
    };
    QuestionnaireService.prototype.getQuestionnaires = function () {
        var url = apiUrl + "/questionnaires";
        return this.httpclient.get(url, httpOptions)
            .pipe(operators_1.map(this.extractData)); // convertir la reponse Observable vers un Array de session
        // .subscribe();
    };
    QuestionnaireService.prototype.addQuestionnaire = function (questionnaire) {
        var url = apiUrl + "/questionnaire";
        return this.httpclient.post(url, questionnaire, httpOptions)
            .pipe();
    };
    /*
    countFormateur(): Observable<any>{
        const url = `${apiUrl}/nombreFormateur`;
        return this.httpclient.get(url, httpOptions)
            .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
        //.subscribe();
    }*/
    QuestionnaireService.prototype.deleteQuestionnaire = function (questionnaire) {
        var url = apiUrl + "/questionnaire/";
        return this.httpclient.delete(url + questionnaire._id, httpOptions)
            .pipe(operators_1.map(this.extractData));
    };
    QuestionnaireService.prototype.updateQuestionnaire = function (questionnaire) {
        var url = apiUrl + "/update/";
        return this.httpclient.put(url + questionnaire._id, questionnaire, httpOptions)
            .pipe(operators_1.map(this.extractData));
    };
    QuestionnaireService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], QuestionnaireService);
    return QuestionnaireService;
}());
exports.QuestionnaireService = QuestionnaireService;
//# sourceMappingURL=questionnaire.service.js.map