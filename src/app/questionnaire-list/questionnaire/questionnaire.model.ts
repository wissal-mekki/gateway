
export class Questionnaire {
    constructor(
    public id: number,
    public sujet: string,
    public nbques: number) {}
    static fromJson(json) {
        return new Questionnaire(json.id, json.sujet, json.nbques); }
}
