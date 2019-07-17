import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';
import {Questionnaire} from '../questionnaire-list/questionnaire/questionnaire.model';
import {Router} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs/Rx';
import {Application} from '../application-list/application/application.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
sujets: string[];
verif = false ;
    Q:Questionnaire;
//  = new BehaviorSubject<null> ;
id:number;
app = new Subject<Application>();
A : Application ;
sujctrl:string ;
  constructor(private testhttp: TestService,private  router: Router) { }

  ngOnInit() {
      this.testhttp.getsubjects().subscribe(data => {
          console.log();
          this.sujets = data;
          console.log(this.sujets);
      });
      this.testhttp.GetApp().subscribe(data => {
          console.log();
          this.app.next(data)
      });
      this.app.asObservable().subscribe(data => {
          this.sujctrl = data.offer.questionnaire ;
            /*  new Application(data.id,data.cv,data.coveringletter,data.user,data.offer);
     console.log(this.A) ;*/
      });
  }
    verify(sujet):boolean {
      this.verif = false ;
        if (this.sujctrl === sujet) {
              console.log(this.sujctrl);
            this.verif= true ;
        }
         console.log(this.verif) ;
        return this.verif ;
    }
questionnaire(sujet) {
      this.testhttp.getQuestionnaireBySujet(sujet).subscribe(data => {
          console.log(data);
         const quest=new Subject<Questionnaire>();
         quest.next(data);
        //  const quest = new Questionnaire() ;
       // quest.next(data);
         // this.quest=new Questionnaire(this.id; data['sujet']; data'nbques']);
          console.log(quest);
          this.testhttp.setQuest(data);
      });
   // this.testhttp.setQuest(quest);
      // console.log(this.id);
     this.router.navigate(['/quest-disp']);
}
}
