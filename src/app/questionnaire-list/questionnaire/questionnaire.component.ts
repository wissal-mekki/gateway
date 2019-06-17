import {Component, Input, OnInit} from '@angular/core';
import {QuestionnaireService} from './questionnaire.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
@Input() nbques: Number ;
  constructor( private questionnairehttp: QuestionnaireService, private  router: Router) {
  }

  ngOnInit() {
  }
    addQuestionnaire(questionnaire) {
       /* this.nbques=questionnaire['nbques'];
        console.log(this.nbques);*/
        this.questionnairehttp.SetNumber(this.nbques) ;
        const questionnairea = {
            'sujet': questionnaire['sujet'],
            'nbques': questionnaire['nbques']
        };
        this.questionnairehttp.addQuestionnaire(questionnairea).subscribe(res => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
        this.router.navigate(['/questions']);
    }
}
