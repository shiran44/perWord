import { Component, OnInit } from '@angular/core';
import  { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-write-word',
  templateUrl: './write-word.component.html',
  styleUrls: ['./write-word.component.css']
})
export class WriteWordComponent implements OnInit {
    engWords;
    word;
    transWord;
    letter=[];
    count=0;
    point=0;

  constructor(private newService : MyServiceService) { }

  ngOnInit() {

        this.newService.englishWords( (words) => {
        this.engWords = words;
        this.word = this.engWords[Math.floor(Math.random() * this.engWords.length)];
        console.log(this.word);
        this.count++;
        let box=document.getElementById('mainDiv').getElementsByTagName('div');

        for(let i=0;i<16;i++){
            this.letter[i] = String.fromCharCode(97 + Math.floor(Math.random() * 26));        
            box[i].innerHTML=this.letter[i];
        }

        for(let j=0 ;j<this.word.length; j++){ 
            let location= Math.floor(Math.random() * 16) + 0;
            console.log(location);
            box[location].innerHTML=this.word[j];
        }

        for(let n=0; n<16; n++){
          console.log(this.word);
          let word1= this.word,
              flag='false';

          box[n].addEventListener('click',function(event){
            console.log(word1);

            for(let k=0; k<word1.length; k++){
              if (this.innerHTML == word1[k]){
                  this.style.backgroundColor="green";
                  flag='true';
                  console.log('successssss'); 
              }

              if (this.innerHTML != word1[k]){
              }  
            }
          }); 

          if (flag=='true'){
            this.point++;
          }
      }
    this.newService.getTranslateData(this.word,(translate)=>{
      this.transWord=translate;
    })
    })


   }

  nextQeu(){
   // this.flag='true';
        for(let h=0; h<16; h++){
          document.getElementById("mainDiv").getElementsByTagName('div')[h].style.backgroundColor="#60d9e9";

        }

      this.ngOnInit();
  }
  goBack(){
    window.history.back();
  }
}
