namespace overflow.Controllers {
    export class QuestionController {
        public questions;
        public question;
        private questId;

        constructor(private questionServices: overflow.Services.QuestionService,
                    private $stateParams: ng.ui.IStateParamsService){
            this.getQuestions();
            this.questId = this.$stateParams['id'];
            this.getQuestion();
            
        }

        getQuestions(){
            this.questions = this.questionServices.getQuestions();
        }
        getQuestion(){
            this.question = this.questionServices.getQuestion(this.questId);
        }
    }
}
