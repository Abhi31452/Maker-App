import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCrudService } from '../customServices/user-crud.service';
import { QuestionPaper } from '../customClasses/question-paper';
import { MatDialog } from '@angular/material/dialog'; 

@Component({
  selector: 'app-questionpaper',
  templateUrl: './questionpaper.component.html',
  styleUrls: ['./questionpaper.component.css'] // Fix for "styleUrl"
})
export class QuestionpaperComponent {
  subjectId: Number = 0;
  subjectName: String = "";
  questionTitle: String = "";
  questionpaper: QuestionPaper[] = [];
  questionPaperForm: any;
  submissionMessage: string = "";
  isQuestionPaper :boolean =false;
 
  constructor(private fb: FormBuilder, private route: ActivatedRoute,public router : Router, public usercrud: UserCrudService, public dialog: MatDialog) {
    // this.router.events.subscribe((event: any) => {
    //   if (event.url) {
    //     this.isQuestionPaper = this.router.url == "/dashboard/subject/questionpaper";
    //   }
    // });
   
       this.questionPaperForm = this.fb.group({
      title: ['', Validators.required],
    });
}

  ngOnInit() {

      this.route.params.subscribe(params => {
      this.subjectId = params['_id'];
      this.subjectName = params['subjectName'];

      console.log('Subject ID:', this.subjectId);
      console.log('Subject name:', this.subjectName);
    });

    this.usercrud.getAllQuestionPaper().subscribe(
      response => {
        if (response?.Success) {
          console.log("In QuestionPaper", response.data);
    
          // Filter question papers based on the subjectId
          this.questionpaper = response.data
            .filter(item => item.subjectId === this.subjectId) 
            .map(item => new QuestionPaper(item._id, item.title, item.subjectId, item.questionsId)); // Map to QuestionPaper instances
    
          console.log("Filtered Question Papers: ", this.questionpaper);
          
          // Check if any question papers were found for the subjectId
          if (this.questionpaper.length === 0) {
            console.log("No question papers found for this subject.");
          }
        }
      },
      error => {
        console.log("Error fetching question papers: ", error);
      }
    );
    

  }



  onSubmit(): void {
    if (this.questionPaperForm.valid) {
      const questionTitle = this.questionPaperForm.value;
      console.log("questionTitle" , questionTitle)
      const dataToSend = {
        title: questionTitle.title,
        subjectId: this.subjectId
      };

      this.usercrud.addQuestionPaper(dataToSend).subscribe(
        response => {
          if (response.Success) {
            this.submissionMessage = 'Question paper added successfully!';
            alert("added Successfully")
            this.questionPaperForm.reset();
            this.router.navigate(['/dashboard/subject']);
          } else {
            this.submissionMessage = 'Failed to add question paper: ' + response.message;
          }
        },
        error => {
          console.error('Error adding question paper', error);
          this.submissionMessage = 'Error adding question paper: ' + (error.message || 'Unknown error');
        }
      );
    } else {
      this.submissionMessage = 'Please fill in all required fields.';
    }
  }

  // openQuestionPaperForm(): void {
  //   const dialogRef = this.dialog.open(QuestionPaperFormComponent, {
  //     width: '500px',
  //     disableClose: true
  //   });
  
  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     if (result) {
  //       console.log('Form result:', result);
  //       // Here you can handle the form result (submit to the backend or process further)
  //     }
  //   });
  // }
  


}
