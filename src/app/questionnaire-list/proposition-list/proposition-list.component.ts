import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question-list/question/question.service';
import {Question} from '../question-list/question/question.model';
import {TestService} from '../../test/test.service';
import {PropositionService} from './proposition/proposition.service';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-proposition-list',
  templateUrl: './proposition-list.component.html',
  styleUrls: ['./proposition-list.component.scss']
})
export class PropositionListComponent implements OnInit {
  nbprop: Number ;
  p: Number = 1 ;
  tab:  {}[] ;
  nbprop_tab=[
  ] ;
  questions=[
  ] ;
  nbques: Number ;
  length = 0 ;
   j =0 ;
  constructor(private questionhttp: QuestionService, private prophttp:PropositionService) {
  }
    private extractData(res: Response) {
        const body = res;
        return body || {};
    }
  ngOnInit() {
      this.nbprop = this.questionhttp.GetNumber();
      // y console.log(this.nbprop);
      // y console.log(this.questionhttp.getProp());
 /*     this.tab = this.questionhttp.getProp();
      // y console.log(this.tab);
      this.nbques = this.tab.length;
     const array = this.questionhttp.getProp();
    // let was ;
     // console.log(array.map(value => was = value['nbprop']));
     // y console.log(array['0']);
      const vals = Object.keys(array).map(function (key) {
          return array[key];
      });
      /* document.write(array[0]['nbprop']); */
      // y console.log(array[0]['nbprop']);
      // y console.log(vals[0]['nbprop']);
    /*  vals.forEach((y) => {this.length=this.length+y['nbprop'];
      this.nbprop_tab.push(y['nbprop']);
      });
         vals.forEach((value, index1) => {this.testhttp.getQuestionstest(value['id_quest']).subscribe(data => {
           //  this.questions=data ;
             console.log(data);
             this.questions.push(data[index1]);
         })});
       console.log(this.nbprop_tab);
         console.log(this.questions);

    /*  for (let i = 0; i < this.nbques; i++) {
          this.length = this.length + vals[i]['nbprop'];
          console.log(i);
          console.log(this.length);
      }
      let s = 0 ;
      for(let i in vals){
          s = s +vals[i]['nbprop'] ;
      }
      vals.forEach(function (value, index) {
          s = s +value['nbprop'] ;

      }) ;
      console.log(s);
      for (let i = 0; i < this.nbques; i++) {
          this.testhttp.getQuestionstest(vals[i]['id_quest']).subscribe(data => {
              this.questions = data;
          });
      }
      console.log(this.questions) ;*/
  }
    forProp() {
        let i = this.nbprop_tab[this.j];
        if (this.p < i && this.j < this.questions.length) {
            this.prophttp.SeQuestionForProp(this.questions[this.j]);
            console.log(i);
            if (this.p === i) {
                this.j = this.j + 1;
            }
        }
    }
arrayTwo(n: number): number[] {
  return [...Array(n).keys()];
}

  setPage(p) {
    this.questionhttp.setPage(p);
   // this.p=p;
    console.log(p);
  }
}
