export class Questions {
    constructor(
        questionText : string ="",
        questionType : 'multiple-choice' | 'true/false' | 'descriptive',
        option? : String[],
        marks :number=0,
        correctAnswer : String ="",
        questionPaperId :string=""
    ){

    }
}


// questionText : String,
// questionType : 'multiple-choice' | 'true/false' | 'descriptive',
// option? : String[],
// correctAnswer : String ,
// marks : Number,
// questionPaperId : mongoose.Schema.Types.ObjectId