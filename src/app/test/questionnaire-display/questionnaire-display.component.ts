import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Question} from '../../questionnaire-list/question-list/question/question.model';
import {Questionnaire} from '../../questionnaire-list/questionnaire/questionnaire.model';
import {TestService} from '../test.service';

@Component({
  selector: 'app-questionnaire-display',
  templateUrl: './questionnaire-display.component.html',
  styleUrls: ['./questionnaire-display.component.scss']
})

export class QuestionnaireDisplayComponent implements OnInit {
    Q:Questionnaire;
  questions$: Observable<Question[]>;
  constructor(private testhttp:TestService) { }

  ngOnInit() {
        // this.Q=this.testhttp.GetQuest().getValue();
      this.testhttp.GetQuest().subscribe(data => {
          this.Q=data ;
      });
          /*.subscribe(data => {
          this.Q=new Questionnaire(data.id,data.sujet,data.nbques);
      });*/
    //  this.quest=new Questionnaire(Q['id'],Q['sujet'],Q['nbques']);
  // console.log(this.quest);
  /*.subscribe(data => {
      console.log(data);
      this.quest = data;
  });*/
  }

}
