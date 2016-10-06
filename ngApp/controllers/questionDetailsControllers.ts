namespace overflow.Controllers {
    export class QuestionDetailsController {
        public question;
        public comment = {};
        private questId;

        constructor(private questionServices: overflow.Services.QuestionService,
                    private $stateParams: ng.ui.IStateParamsService){
            this.questId = this.$stateParams['id'];
            this.getQuestion();
            console.log(this.questId)

        }

        getQuestion(){
            this.question = this.questionServices.getQuestion(this.questId)
        }

        saveComment(){
            console.log(this.questId);
            console.log(this.comment)
            this.questionServices.saveComment(this.questId, this.comment).then(()=>{
                this.getQuestion();
                this.comment = ''
            }).catch(()=>{
                console.log('Something went wrong...')
            })
        }
        addVote(){
                this.question.votes++;
            this.questionServices.editQuestion(this.question);
        }

        minusVote(){
            this.question.votes--;
            this.questionServices.editQuestion(this.question);
        }

    }
}
