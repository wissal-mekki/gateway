import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question-list/question/question.service';

@Component({
  selector: 'app-proposition-list',
  templateUrl: './proposition-list.component.html',
  styleUrls: ['./proposition-list.component.scss']
})
export class PropositionListComponent implements OnInit {
  nbprop: Number ;
  p: Number = 1 ;
  constructor(private questionhttp: QuestionService) {
  }
  ngOnInit() {
  this.nbprop=this.questionhttp.GetNumber() ;
  console.log(this.nbprop);
  }

arrayTwo(n: number): number[] {
  return [...Array(n).keys()];
}
}
