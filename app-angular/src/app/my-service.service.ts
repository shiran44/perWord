import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';


@Injectable()
export class MyServiceService {

  constructor(private http: Http) {}

  englishWords(callback: Function) {
      this.http.get('https://perwordproject.herokuapp.com/getAllEnglishWords')
      .subscribe(
          (res: Response ) => {
              callback( res.json() );
          }
       )
  }
  getOptions(data: string, callback: Function){
    let wordId=data;
    this.http.get('https://perwordproject.herokuapp.com/getWordTrivia/'+wordId)
      .subscribe(
        (response: Response) =>  {
          console.log(response.json());
          callback(response.json());
        },
        (error => {
          console.log(error);
          callback(null);
        })
      );
    }
    checkAnswer(data: string,data1: string, callback: Function){
        let wordId=data;
        let wordSelect=data1;
        this.http.get('https://perwordproject.herokuapp.com/getPlay/'+ wordId+'/'+wordSelect)
          .subscribe(
            (response: Response) =>  {
              console.log(response.json());
              callback(response.json());
            },
            (error => {
              console.log(error);
              callback(null);
            })
          );
    }

    getTranslateFromGoogleApi(data: string,data1: string, data2: string, callback: Function){
        let from=data;
        let to=data1;
        let text=data2;
        this.http.get('https://perwordproject.herokuapp.com/getTranslate/'+ from+'/'+to+'/'+text)
          .subscribe(
            (response: Response) =>  {
              console.log(response.json());
              callback(response.json());
            },
            (error => {
              console.log(error);
              callback(null);
            })
      );
    }

    insertWordData(data: string, data1: string, id: number, wordOp1: string ,wordOp2: string, wordOp3: string,wordOp4: string, callback: Function){
        let english=data;
        let hebrew=data1;
        let idWord=id;
        let word1= wordOp1,
            word2= wordOp2,
            word3= wordOp3,
            word4=wordOp4;
        this.http.get('https://perwordproject.herokuapp.com/insertNewWord/'+ english+'/'+hebrew+'/'+idWord+'/'+word1+'/'+word2+'/'+word3+'/'+word4)
          .subscribe(
            (response: Response) =>  {
              console.log(response.json());
              callback(response.json());
            },
            (error => {
              console.log(error);
              callback(null);
            })
      );
    }



}
