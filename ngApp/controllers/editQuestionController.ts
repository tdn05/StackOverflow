namespace overflow.Controllers {
    export class EditQuestionController {
        public question;
        private questId;

        constructor (private questionServices: overflow.Services.QuestionService,
                    private $stateParams: ng.ui.IStateParamsService,
                    private $state: ng.ui.IStateService){
                    this.questId = this.$stateParams['id'];
                    this.getQuestion()
        }

        getQuestion(){
            this.question = this.questionServices.getQuestion(this.questId)
        }
        editQuestion(){
            this.questionServices.editQuestion(this.question).then(()=>{
                    this.getQuestion();
                    this.$state.go('questionDetails', {id: this.questId});
            }).catch(()=>{
                console.log('Something went wrong...');
            });
        }
    }
}
