import * as express from 'express';
import Comment from '../model/comment';

let commentRoute = express.Router();

//ReadComment

commentRoute.get('/:id', (req,res)=>{
    Comment.findById(req.params['id']).then((comment)=>{
        res.send(comment);
    
    }).catch((err)=>{
        res.status(500).send({err: err})
    })
});

//update
commentRoute.put('/', (req,res)=>{
    Comment.findByIdAndUpdate(req.body._id, req.body).then((comment)=>{
        res.send(comment)
    }).catch((err)=>{
        res.status(404).send({err: err})
    })
})

export default commentRoute;
