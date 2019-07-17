import {Question} from '../../question-list/question/question.model';
export class Proposition {
    constructor(
        public id: number,
        public contenu: string,
        public question: Question) {}
}