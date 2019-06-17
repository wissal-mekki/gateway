"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var question_service_1 = require("./question.service");
describe('QuestionService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [question_service_1.QuestionService]
        });
    });
    it('should be created', testing_1.inject([question_service_1.QuestionService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=question.service.spec.js.map