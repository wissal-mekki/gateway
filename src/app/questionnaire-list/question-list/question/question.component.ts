import {Component, Input, OnInit} from '@angular/core';
import {QuestionnaireService} from '../../questionnaire/questionnaire.service';
import {QuestionService} from './question.service';
import {QuestionnaireComponent} from '../../questionnaire/questionnaire.component';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {d} from '@angular/core/src/render3';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
   nbprop: Number ;
    @Input() type: String;
    p: Number = 1;
    Page: Number = 1;
    nbques: Number;
    questionnaire_id: any;

    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    constructor(private router: Router, private questionhttp: QuestionService, private questionnairehttp: QuestionnaireService) {
    }

    ngOnInit() {
        this.questionhttp.getLastId().subscribe(data => {
            // y    console.log(data);
            this.questionnaire_id = data;
        });
    }

    addQuestion(question) {
        // .pipe
        // (map(this.extractData));
        /* .subscribe(resp => {
            // access the body directly, which is typed as `Config`.
            this.questionnaire_id= { ... resp.body }; });*/
        if (question['type'] === 'texte') {
            this.questionhttp.SetNumber(0);
            this.nbprop = 0;
        } else if (question['type'] === 'checkbox') {
            //        this.questionhttp.SetNumber(this.nbprop);
            this.questionhttp.SetNumber(question['nbprop']);
            this.nbprop = question['nbprop'];
        }
        this.Page = this.questionnairehttp.getPage();
        this.nbques = this.questionnairehttp.GetNumber();
        // y console.log(this.nbques) ;
        this.questionhttp.setCompteur(this.Page);

        /*  const tab = {
             'nbprop':question['nbprop'],
              'id_quest': this.questionnaire_id['id']
          };
          this.questionhttp.serProp(tab,this.nbques); */
        /* this.questionhttp.proposition_tab['nbques']=this.nbques;
         this.questionhttp.proposition_tab['tab']=tab ;*/
        const questiona = {
            'type': question['type'],
            'contenu': question['contenu'],
            'reponse': question['reponse'],
            'nbprop': this.nbprop,
            'questionnaire': this.questionnaire_id
        };

        this.questionhttp.addQuestion(questiona).subscribe(res => {
            // console.log(this.questionnaire_id);
            // y console.log(res);
            // y console.log(questiona['questionnaire']);
        }, (err) => {
            console.log(err);
        });
        console.log('Page de la question' + this.Page);
        console.log('nb prop' + this.nbprop);
        console.log('nb de question' + this.nbques);
        if (this.nbprop > 0) {
            this.router.navigate(['/propositions']);
        }
        if (this.nbprop === 0) {
            console.log(this.Page < this.nbques);
            if (this.Page<this.nbques) {
                //  this.router.navigate(['/questionnaires']) ;
                this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(() =>
                    this.router.navigate(['/questions']));
            }
            if (this.Page === this.nbques) {
                this.router.navigate(['/dashboard']);
            }
        }
    }
}
