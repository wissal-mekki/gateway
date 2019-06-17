import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from '../questionnaire/questionnaire.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
nbques: Number ;
p: Number = 1 ;
config: any ;
  constructor(private questionnairehttp: QuestionnaireService) {
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
  }
  array(n: number): any[] {
    return Array(n) ;
  }

  arrayTwo(n: number): number[] {
    return [...Array(n).keys()];
  }
}
