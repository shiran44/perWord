import { Component, OnInit } from '@angular/core';
import  { MyServiceService } from '../my-service.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  engWords;
  word;
  options=[];
  select;
  resultFun;
  point=0;
  count=0;
  answer;
  constructor( private newService : MyServiceService ) {}


  ngOnInit() {
     this.newService.englishWords( (words) => {
         this.engWords = words;
         this.word = this.engWords[Math.floor(Math.random() * this.engWords.length)];
         this.newService.getOptions( this.word,(engOptions) => {
         this.options = engOptions ;
         this.count++;
     })
     })

  }
   check(word,select){
       this.newService.checkAnswer(this.word,select, (result) => {
           this.resultFun=result;
           if ( this.resultFun=='true' ){
               this.point += 1;
               document.getElementById('res').innerHTML="!תשובה נכונה";
               document.getElementById('res').style.color="#66b745";
            }
            else{
                document.getElementById('res').innerHTML="!תשובה שגויה";
                document.getElementById('res').style.color="red";
            }
       })
       }
       nextQeu(){
           document.getElementById('res').innerHTML="";
           this.ngOnInit();
       }

}
