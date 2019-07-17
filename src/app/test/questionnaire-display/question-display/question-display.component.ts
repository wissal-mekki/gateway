import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../questionnaire-list/question-list/question/question.model';
import {TestService} from '../../test.service';
import {Proposition} from '../../../questionnaire-list/proposition-list/proposition/proposition.model';
// import {Proposition} from '../../../questionnaire-list/proposition-list/proposition/proposition.model';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.scss']
})
export class QuestionDisplayComponent implements OnInit {
  @Input() question: Question;
  type: String;
  propositions: Proposition[];
  value: String;
  proposition: {
      'id':number,
      'contenu':String
  }[];
  score = 0;

  constructor(private testhttp: TestService) {
  }

  ngOnInit() {
    this.type = this.question.type;
    this.testhttp.getPropostionstest(this.question.id).subscribe(data => {
      this.propositions = data;
      console.log(this.propositions.length);
    });
    console.log('Your score'+this.testhttp.getScore());
  }

    OnCheckboxSelect(contenu, event) {
        if (event.target.checked === true) {
            this.value=contenu;
            console.log(this.value);
        }
    }
  Score(value) {
    if (this.value === this.question.reponse) {
      this.score = this.score + 1;
      this.testhttp.setScore(this.score);
    }
    console.log(this.value);
      console.log(this.score);
  }
}
