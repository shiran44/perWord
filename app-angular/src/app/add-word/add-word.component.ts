import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import  { MyServiceService } from '../my-service.service';


@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {
     form;
     saveData;

  constructor(private newService : MyServiceService) { }

  ngOnInit() {
        this.form=new FormGroup({
          inputEnglishWord: new FormControl(""),
          inputHebrewhWord: new FormControl(""),
          inputWordId: new FormControl(""),
          inputWord1: new FormControl(""),
          inputWord2: new FormControl(""),
          inputWord3: new FormControl(""),
          inputWord4: new FormControl("")
      }); 
  }

 onSubmit(frm){
    this.newService.insertWordData(frm.inputEnglishWord, frm.inputHebrewhWord, frm.inputWordId, frm.inputWord1,
        frm.inputWord2, frm.inputWord3, frm.inputWord4, (res)=> {
    this.saveData=res;
    })


  }


}
