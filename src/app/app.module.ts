import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonaDetailComponent } from './components/persona-detail/persona-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionFilterPipe } from './pipes/question-filter.pipe';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { PersonaFilterPipe } from './pipes/persona-filter.pipe';
import { AnswerTypesComponent } from './components/answer-types/answer-types.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaDetailComponent,
    MessagesComponent,
    DashboardComponent,
    QuestionsComponent,
    AddItemComponent,
    QuestionDetailComponent,
    QuestionFilterPipe,
    EditItemComponent,
    PersonaFilterPipe,
    AnswerTypesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

