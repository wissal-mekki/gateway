import { Component, OnInit } from '@angular/core';
import {PropositionService} from './proposition.service';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.scss']
})
export class PropositionComponent implements OnInit {
question:any ;
  constructor(private propositionhttp: PropositionService) { }

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
    const propositiona = {
      'contenu': proposition['contenu'],
      'question':this.question
    };
    this.propositionhttp.addProposition(propositiona).subscribe(res => {
      // console.log(this.questionnaire_id);
      console.log(res);
      console.log(propositiona['question']);
    }, (err) => {
      console.log(err);
    });
  }

}
