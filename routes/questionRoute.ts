//import libraries
import * as express from 'express';
import Question from '../model/question'
import * as mongodb from 'mongodb'
import Comment from '../model/comment'

//make an objectiD
let ObjectId = mongodb.ObjectID;

//create a route
let questionRoute = express.Router();

//create a question
questionRoute.post('/', (req,res)=>{
    let question = new Question();

    question.title = req.body.title;
    question.name  = "Truong is Cool";
    question.comments  = req.body.comment;
    question.votes  = 0;
    question.timeCreate  = new Date();
    question.question = req.body.question;

    question.save().then((question)=>{
        res.status(201).send(question)
    }).catch((err)=>{
        res.status(400).send(err);
    });
});

//read questions

questionRoute.get('/', (req,res)=>{
    Question.find().sort('timeCreate').populate('comments').then((questions)=>{
        res.send(questions);
    }).catch((err)=>{
        res.status(500).send({err: err})
    })
});

questionRoute.get('/:id', (req,res)=>{
    Question.findById(req.params['id']).populate('comments').then((question)=>{
        res.send(question);
    }).catch((err)=>{
        res.status(500).send({err:err})
    })
});

//update Question
questionRoute.put('/', (req,res)=>{
    Question.findByIdAndUpdate(req.body._id, req.body).then((question)=>{
        res.send(question)
    }).catch((err)=>{
        res.status(404).send(err);
    })
});

//delete Question
questionRoute.delete('/:id', (req,res)=>{
    Question.findByIdAndRemove(req.params['id']).then(()=>{
        res.sendStatus(200)
    }).catch((err)=>{
        res.sendStatus(400)
    })
});

//add Comment to Question
questionRoute.post('/comments/:questId', (req, res)=>{
    console.log(req.params['questId']);
    console.log(req.body);
    let questId = new ObjectId(req.params['questId']);


    let comment = new Comment();
    comment.message = req.body.message;
    comment.timeCreate = new Date();
    comment.name = 'Anonymous';
    comment.votes = req.body.votes;

    comment.save()
    .then((comment)=>{

        let commentId = new ObjectId(comment._id);

        Question.update({_id: questId}, { $push: {comments: commentId }})
        .then(()=>{
            res.sendStatus(201);
        }).catch(()=>{
            res.sendStatus(404);
        });
    }).catch(()=>{
        res.sendStatus(400);
    });
});


export default questionRoute;
