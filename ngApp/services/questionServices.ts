namespace overflow.Services {
    export class QuestionService {
        public questionResource;

        constructor(private $resource: ng.resource.IResourceService){
            this.questionResource = $resource('/api/questions/:id', null, {
                edit: {
                    method: 'PUT',
                    url: '/api/questions'
                },
                saveComment: {
                    method: 'POST',
                    url: '/api/questions/comments/:questId'
                }
            })
        }

        getQuestions(){
            return this.questionResource.query();
        }

        getQuestion(id){
            return this.questionResource.get({id:id});
        }

        saveQuestion(question){
            return this.questionResource.save(question).$promise;
        }

        editQuestion(question){
            return this.questionResource.edit(question).$promise;
        }

        deleteQuestion(id){
            return this.questionResource.delete({id: id}).$promise;
        }

        saveComment(questId, comment){
            return this.questionResource.saveComment({questId: questId}, comment).$promise;
        }
    }
    angular.module('overflow').service('questionServices', QuestionService)
}
