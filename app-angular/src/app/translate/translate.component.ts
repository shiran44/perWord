import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import  { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
    form;
    translateWord;
  constructor(private newService : MyServiceService ) { }

  ngOnInit() {
      this.form=new FormGroup({
          fromLanguage: new FormControl("English"),
          toLanguage: new FormControl("עיברית"),
          inputWord: new FormControl("")
      }); 
  }
  onSubmit(frm){
      this.newService.getTranslateFromGoogleApi(frm.fromLanguage, frm.toLanguage, frm.inputWord, (translte)=> {
         this.translateWord=translte;
      })

      console.log(frm.fromLanguage);
  }
       goBack(){
         window.history.back();
       }

}
