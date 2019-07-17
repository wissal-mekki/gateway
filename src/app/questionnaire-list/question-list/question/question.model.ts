import {Questionnaire} from '../../questionnaire/questionnaire.model';
export class Question {
    constructor(
        public id: number,
        public contenu: string,
        public nbprop: number,
        public reponse: string,
        public type: string,
        public questionnaire: Questionnaire) {}
}
