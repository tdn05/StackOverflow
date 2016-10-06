namespace overflow.Controllers {
    export class AskQuestionController {
        public question;
        constructor(private questionServices: overflow.Services.QuestionService,
                    private $state: ng.ui.IStateService){

        }

        saveQuestion(){
            this.questionServices.saveQuestion(this.question)

            .then(()=>{
                this.$state.go('home');

            }).catch(()=>{
                console.log('Something went wrong...')
            })
        }
        comments(){
            console.log('')
        }
    }
}
