import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs/Rx';
import {Question} from '../../questionnaire-list/question-list/question/question.model';
import {Questionnaire} from '../../questionnaire-list/questionnaire/questionnaire.model';
import {TestService} from '../test.service';

@Component({
  selector: 'app-questionnaire-display',
  templateUrl: './questionnaire-display.component.html',
  styleUrls: ['./questionnaire-display.component.scss']
})

export class QuestionnaireDisplayComponent implements OnInit {
    Q=new Subject<Questionnaire>();
    ques= new  Questionnaire(null,null,null) ;
  questions$: Observable<Question[]>;
  questions:Question[] ;
  id: number ;
  length: number;
    p: Number = 1 ;
  constructor(private testhttp:TestService) { }

  ngOnInit() {
        // this.Q=this.testhttp.GetQuest().getValue();
      this.testhttp.GetQuest().subscribe(data => {
          this.Q.next(data) ;
          /*this.questions$ = this.testhttp.getQuestionstest(data.id);
          this.questions$.subscribe(data2 => {
              console.log(data2);
          })*/
      });
          /*.subscribe(data => {
          this.Q=new Questionnaire(data.id,data.sujet,data.nbques);
      });*/
    //  this.quest=new Questionnaire(Q['id'],Q['sujet'],Q['nbques']);
  this.Q.asObservable().subscribe(data => {
      this.ques = data;
      this.id= data.id ;
      console.log(this.id);
      const  id = this.ques.id ;
      console.log(this.ques);
    this.questions$ = this.testhttp.getQuestionstest(id);
      this.questions$.subscribe(data2 => {
          console.log(data2);
          this.questions=data2 ;
          this.length=data2.length;
      });
  });
  /*.subscribe(data => {
      console.log(data);
      this.quest = data;
  });*/
  }
    arrayTwo(n: number): number[] {
        return [...Array(n).keys()];
    }
}
