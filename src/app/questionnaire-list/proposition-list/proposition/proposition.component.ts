import {Component, OnInit } from '@angular/core';
import {PropositionService} from './proposition.service';
import {QuestionService} from '../../question-list/question/question.service';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs/Rx';
import {Question} from '../../question-list/question/question.model';
import {QuestionnaireService} from '../../questionnaire/questionnaire.service';
import {CheckDirective} from '../../../check.directive';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.scss']
})
export class PropositionComponent implements OnInit {
question: any;
Page: Number =1;
nbprop:Number ;
Q: Question ;
nbques: Number ;
compteur: Number ;
constructor(private propositionhttp: PropositionService
            ,private questionnairehttp: QuestionnaireService
            , private questionhttp: QuestionService, private  router: Router) { }

  ngOnInit() {
    this.propositionhttp.getLastQuestion().subscribe(data => {
      console.log(data);
      this.question = data;
    });
  }
  addProposition(proposition) {
    // .pipe
    // (map(this.extractData));
    /* .subscribe(resp => {
        // access the body directly, which is typed as `Config`.
        this.questionnaire_id= { ... resp.body }; });*/
    this.Page=this.questionhttp.getPage();
    this.nbprop=this.questionhttp.GetNumber();
    this.nbques=this.questionnairehttp.GetNumber();

    /* this.question=this.propositionhttp.GetQuestionForProp();
      this.question.subscribe(data => {
          this.Q = new Question(data.id,data.contenu,data.nbprop,data.reponse,data.type,data.questionnaire );
      });*/
    console.log(this.question);
    console.log(this.Page);
    const propositiona = {
        'contenu': proposition['contenu'],
        'question': this.question
    } ;
    this.compteur=this.questionhttp.getCompteur() ;
    this.propositionhttp.addProposition(propositiona).subscribe(res => {
      // console.log(this.questionnaire_id);
      console.log(res);
      console.log(propositiona['question']);
    }, (err) => {
      console.log(err);
    });
    console.log('Compteur='+this.compteur) ;
      console.log('Nombre de question='+this.nbques) ;
      console.log('Page='+this.Page) ;
      console.log('Nombre de prop='+this.nbprop) ;
    if ((this.Page === this.nbprop)) {
        this.questionhttp.setPage(1);
        if(this.compteur<this.nbques) {
            this.router.navigate(['/questions']) ;
        } else {
            this.router.navigate(['/dashboard']);
        }
    }
  }

}
