import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { QuestionpaperComponent } from './questionpaper/questionpaper.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SubjectComponentComponent } from './subject-component/subject-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { CreateQuestionComponent } from './question-paper-form/question-paper-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashBoardComponent,
    FooterComponent,
    QuestionpaperComponent,
    SubjectComponentComponent,
    CreateQuestionComponent
    
  ],
  imports: [

    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatCard,
    MatFormFieldModule,
    MatRadioModule,
    RouterModule,
   
 
  ],
  providers: [
    provideAnimationsAsync(), provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  ``