import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';
import { SelectComponent } from './select/select.component';
import { IndexComponent } from './index/index.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { TranslateComponent } from './translate/translate.component';
import { TriviaComponent } from './trivia/trivia.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    IndexComponent,
    WelcomeComponent,
    VocabularyComponent,
    TranslateComponent,
    TriviaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
    { path: '', component: IndexComponent } , 
    { path: 'welcome/vocabulary', component: VocabularyComponent } ,
    { path: 'welcome', component: WelcomeComponent } ,
    { path: 'welcome/vocabulary/select', component: SelectComponent } ,
    { path: 'welcome/vocabulary/select/translate', component: TranslateComponent } , 
    { path: 'welcome/vocabulary/select/trivia', component: TriviaComponent } 


        ])
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
