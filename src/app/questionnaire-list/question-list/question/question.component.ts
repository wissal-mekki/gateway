import {Component, Input, OnInit} from '@angular/core';
import {QuestionnaireService} from '../../questionnaire/questionnaire.service';
import {QuestionService} from './question.service';
import {QuestionnaireComponent} from '../../questionnaire/questionnaire.component';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    @Input() nbprop: Number ;
   nbques: Number ;
   p: Number =1 ;
    questionnaire_id:any ;
   private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    constructor( private router: Router,private questionhttp: QuestionService , private questionnairehttp: QuestionnaireService) {
  }

  ngOnInit() {
      this.questionhttp.getLastId().subscribe(data => {
          console.log(data);
          this.questionnaire_id = data;
      });
  }
  addQuestion(question) {
   // .pipe
   // (map(this.extractData));
      /* .subscribe(resp => {
          // access the body directly, which is typed as `Config`.
          this.questionnaire_id= { ... resp.body }; });*/
      this.questionhttp.SetNumber(this.nbprop) ;
    const questiona = {
      'type': question['type'],
      'contenu': question['contenu'],
      'reponse': question['reponse'],
      'nbprop': question['nbprop'],
        'questionnaire':this.questionnaire_id
    };
      this.questionhttp.SetNumber(question['nbprop']) ;
    this.questionhttp.addQuestion(questiona).subscribe(res => {
       // console.log(this.questionnaire_id);
      console.log(res);
        console.log(questiona['questionnaire']);
    }, (err) => {
      console.log(err);
    });
      this.router.navigate(['/propositions']);
  }

}
