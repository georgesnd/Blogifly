const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

const auth = require('../middlewares/auth');

router.post('/add', auth, async (req, res) => {

    try {
        console.log('posts/add body is', req.body)

        const newPost = new Post(req.body)

        // const post = await newPost.save()
        const post = await newPost.save().then( item => item.populate({path: 'owner', select: 'username email image'}))

        if (!post) return res.send({success: false, errorId: 2})

        res.send({success: true, post})
    } catch (error) {
        
        console.log('Posts add ERROR', error. message)
        res.send(error. message)
    }
})

router.get('/list', auth, async (req, res) => {

    try {
        
        const posts = await Post.find().limit(10).populate({
            path: 'owner',
            select: 'username age address image'
        })
        // console.log('posts list', posts)
        res.send(posts)
    } catch (error) {
        
        console.log('Posts list ERROR', error. message)
        res.send(error. message)
    }
})

router.put('/likeadd/:postid/:userid', auth, async (req, res) => {

    try {
        
        console.log('likeadd post id is', req.params.postid)
        console.log('likeadd user id is', req.params.userid)
        
        const {userid, postid} = req.params;

        // 1. get the post
        const postToUpdate = await Post.findById(postid)
        console.log('post to update BEFORE is', postToUpdate)


        // 2. update the likes array

        console.log('post to update is', postToUpdate)
        
        const idx = postToUpdate.likes.findIndex(item => item == userid)
        
        console.log('idx IS', idx)
        // check if user is in the likes array
        if (idx > -1) { // -1 means that user not found in the array
            // if yes, then remove him
            postToUpdate.likes.splice(idx, 1);
        } else {
            // if no then add him
            postToUpdate.likes.push(userid)
        }

        // 3. update the post in the DB

        // const post = await Post.findByIdAndUpdate(postid, postToUpdate)
        const post = await postToUpdate.save()
      
        console.log('post is', post)
        res.send({success: true, post})

    } catch (error) {
        
        console.log('Like add ERROR', error. message)
        res.send(error. message)
    }
})

router.get('/single/:id', async (req, res) => {

    try {
        
        const post = await Post.findOne({_id: req.params.id}).populate({
            path: 'owner',
            select: 'username age address image'
        })
        // console.log('posts list', posts)
        res.send({success: true, post})
    } catch (error) {
        
        console.log('Posts list ERROR', error. message)
        res.send(error. message)
    }
})

router.get('/searchbytag/:tag', async (req, res) => {

    try {
        
        const posts = await Post.find({tags: {$in: req.params.tag}}).populate({
            path: 'owner',
            select: 'username age address image'
        })
        // console.log('posts list', posts)
        res.send({success: true, posts})
    } catch (error) {
        
        console.log('Posts list ERROR', error. message)
        res.send(error. message)
    }
})

module.exports = router