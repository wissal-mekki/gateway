"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var questionnaire_service_1 = require("./questionnaire.service");
describe('QuestionnaireService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [questionnaire_service_1.QuestionnaireService]
        });
    });
    it('should be created', testing_1.inject([questionnaire_service_1.QuestionnaireService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=questionnaire.service.spec.js.map