import { useContext, useEffect, useState } from "react"
import { AdminContext } from "./context"
import { Link, useHistory, useNavigate } from "react-router-dom"
import axios from 'axios'
import parse from 'html-react-parser'

export default function Home() {
    const navigate = useNavigate()
    // const history = useHistory()
    // console.log('history is', history)

    // States
    const [showModal, setShowModal] = useState(false)
    const [showCommentModal, setShowCommentModal] = useState(false)
    const [newPost, setNewPost] = useState('')
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([]);
    
    const [showComments, setShowComments] = useState([false]);

    const [commentToUpdate, setCommentToUpdate] = useState({
        postid: null,
        commentid: null,
        text: '',
        idx: null
    })

    // Context
    const {adminData, setAdminData} = useContext(AdminContext)
    console.log("adminContext:", adminData)
    useEffect(() => {

        if (!adminData) navigate('/') // check if user is logged in and if not redirect him to login page

        const getData = async () => {

            const response = await axios.get('/post/list')

            console.log('home loading: response is', response)

            setPosts([...response.data])
        }

        getData()
    }, [])

    const handleLogout = async () => {

        const response = await axios.get('/admin/logout')

        if (response.data.success) {
            
            // clear the context
            setAdminData(null)
        }
        // redirect user to home
        navigate('/')
    }

    const handleSave = async () => {
        console.log('saved')
    
        const data = {
            owner: adminData._id,
            text: newPost
        }

        console.log('Home: handleSave: data is', data)
        const response = await axios.post('/posts/add', data)

        console.log('save post: response is', response)

        setNewPost('')
        setShowModal(false)

        if(response.data.success) setPosts([...posts, response.data.post])
    }

    const handleLikeClick = async postid => {
        console.log('like clicked')
        
        const response = await axios.put(`/posts/likeadd/${postid}/${adminData._id}`)

        console.log('like add reponse is: ', response)

        if (response.data.success) {

            const postIdx = posts.findIndex(item => item._id == postid)


            const oldPosts = [...posts]

            oldPosts[postIdx].likes = [...response.data.post.likes]

            setPosts([...oldPosts])

        }
    }

    const handleCommentChange = (text, idx) => {
        console.log('text', text, idx)

        const oldComments = [...comments]
        oldComments[idx] = text

        setComments([...oldComments])
    }

    const handleAddComment = async (idx) => {

        const data = {
            postid: posts[idx]._id, // post id
            text: comments[idx],
            owner: adminData._id
        }
        
        const response = await axios.post('/posts/comments/add', data)

        console.log('add comment response is', response)

        if (response.data.success) {
            const oldPosts = [...posts]

            oldPosts[idx].comments = [...response.data.post.comments]
            setPosts([...oldPosts])
            setComments( comments => {
                comments[idx] = '';
                return [...comments]
            } )
        }
    }

    const handleShowComments = (idx) => {

        const oldComments = [...showComments]
        oldComments[idx] = !oldComments[idx] // toggle show the comments

        setShowComments([...oldComments])
    }

    const handleDeleteComment = async (idx, cidx) => {

        console.log('idx, cidx', idx, cidx)

        const postid = posts[idx]._id
        const commentid = posts[idx].comments[cidx]._id

        const response = await axios.delete(`/posts/comments/delete/${postid}/${commentid}`)

        console.log('delete comment response is', response)

        if (response.data.success) {
            const oldPosts = [...posts]

            oldPosts[idx].comments = [...response.data.post.comments]
            setPosts([...oldPosts])
           
        }
    }

    const handleEditComment = (idx, cidx) => {

        // get text from posts state
        const text = posts[idx].comments[cidx].text;

        setCommentToUpdate({
            postid: posts[idx]._id,
            commentid: posts[idx].comments[cidx]._id,
            text,
            idx
        })
        setShowCommentModal(true)
    }
    
    const handleCommentSave = async () => {

        console.log('save comment pressed')

        const {postid, commentid, text} = commentToUpdate

        const response = await axios.put(`/posts/comments/edit/${postid}/${commentid}`, {text})

        console.log('edit comment response is', response)

        if (response.data.success) {

            const idx = commentToUpdate.idx

            setShowCommentModal(false);
            const oldPosts = [...posts]

            // update the post state with the new array of comments for the specifc post
            oldPosts[idx].comments = [...response.data.post.comments]
            setPosts([...oldPosts])

            setCommentToUpdate({
                postid: null,
                commentid: null,
                text: '',
                idx: null
            })

        }
    }


    return <div>
        <p><button onClick={handleLogout}>Logout</button></p>
        <p><Link to='/profile'>Profile</Link></p>
        <Link to="/editor">Add post</Link>

        {
            posts.map((item, idx) => <div key={item._id} style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                padding: '20px',
                margin: '20px'
            }}>
                <div style={{
                
                padding: '30px',
                margin: '20px',
                display: 'flex',
                alignItems: 'center'
            }} >
                <div><img style={{height: '50px', width: '50px', objectFit: 'center'}} src={item.owner.image} alt=''/></div>
                {item.owner.username} <div> {parse(item.body)}</div></div>

                <hr style={{width: '90%'}}/>  
                {/* <div style={{display:'flex', justifyContent: 'space-around'}}>
                    <span style={{cursor: 'pointer', color: item.likes.includes(userData?._id) ? 'red' : 'black'}} onClick={() => handleLikeClick(item._id)}>Like</span>
                    <div>Likes: {item.likes.length}</div> 
                    <div onClick={() => handleShowComments(idx)}
                    style={{cursor: 'pointer'}}>Comments: {item.comments.length}</div>   
                </div> */}

                {/* show the comments */}
                {
                    showComments[idx] ? item.comments.map((comment, cidx)=> <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        {comment.text}
                        <span onClick={() => handleEditComment(idx, cidx)}>Edit</span>
                        <span onClick={() => handleDeleteComment(idx, cidx)}>Del</span>
                    </div>)
                    : null
                }




                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>

                   
                    <textarea style={{width: '90%'}} placeholder="Type your comment" value={comments[idx]} onChange={e => handleCommentChange(e.target.value, idx)}/>
                    <button onClick={() => handleAddComment(idx)}>Add</button>
                </div>
            </div>)
        }
        
       
    </div>
}