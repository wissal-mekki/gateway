import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';
import {Questionnaire} from '../questionnaire-list/questionnaire/questionnaire.model';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/Rx';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
sujets: string[];
    Q:Questionnaire;
// quest = new BehaviorSubject<any>;
id:number;
  constructor(private testhttp: TestService,private  router: Router) { }

  ngOnInit() {
 this.testhttp.getsubjects().subscribe(data => {
      console.log();
      this.sujets = data;
    });
  }
questionnaire(sujet) {
      this.testhttp.getQuestionnaireBySujet(sujet).subscribe(data => {
          console.log(data);
         const quest=new BehaviorSubject<Questionnaire>(data);
        //  const quest = new Questionnaire() ;
       // quest.next(data);
         // this.quest=new Questionnaire(this.id; data['sujet']; data'nbques']);
          console.log(quest.getValue());
          this.testhttp.setQuest(data);
      });
   // this.testhttp.setQuest(quest);
      // console.log(this.id);
     this.router.navigate(['/quest-disp']);
}
}
