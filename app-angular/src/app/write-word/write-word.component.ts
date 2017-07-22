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

  constructor(private newService : MyServiceService) { }

  ngOnInit() {
    this.newService.englishWords( (words) => {
        this.engWords = words;
        this.word = this.engWords[Math.floor(Math.random() * this.engWords.length)];
    })
 }

}
