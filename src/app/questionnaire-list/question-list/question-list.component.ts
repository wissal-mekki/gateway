import {Component, Input, OnInit} from '@angular/core';
import {QuestionnaireService} from '../questionnaire/questionnaire.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from './question/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
nbques: Number ;
p: number ;
@Input() page: number ;
  constructor(private questionnairehttp: QuestionnaireService,private questionService:QuestionService) {
             /* private route: ActivatedRoute, private router: Router) {
    this.config= {
      currentPage: 1,
      itemsPerPage: 1
    }

    this.route.queryParamMap
        .map(params => params.get('page'))
        .subscribe(page => this.config.currentPage = page);*/
  }
  /*pageChange(newPage: number) {
    this.router.navigate([''], { queryParams: { page: newPage } });
  }*/
  ngOnInit() {
    this.nbques=this.questionnairehttp.GetNumber() ;
    this.p=this.questionService.getCompteur().valueOf()+1;
   this.questionnairehttp.setPage(this.p); // pourquoi ?
    console.log('page de la part question-list'+this.p);
  }
  array(n: number): any[] {
    return Array(n) ;
  }

  arrayTwo(n: number): number[] {
    return [...Array(n).keys()];
  }
  setPage(p) {
    this.p=p;
    this.questionnairehttp.setPage(this.p);
    console.log(this.p);
  }
}
