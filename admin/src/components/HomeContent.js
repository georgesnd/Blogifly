import { useContext, useEffect, useState } from "react";
import { AdminContext } from "./context";
import { Link, useHistory, useNavigate } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import AddPost from "./AddPost";
import '../stylesAdmin/homeContent.css'

export default function HomeContent() {
  const navigate = useNavigate();
  // const history = useHistory()
  // console.log('history is', history)

  // States
  // const [showModal, setShowModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  // const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const [showComments, setShowComments] = useState([false]);

  const [commentToUpdate, setCommentToUpdate] = useState({
    postid: null,
    commentid: null,
    text: "",
    idx: null,
  });

  // Context
  const { adminData, setAdminData } = useContext(AdminContext);
  // console.log("adminContext:", adminData)
  useEffect(() => {
    if (!adminData) navigate("/"); 

    const getData = async () => {
      const response = await axios.get(`/post/list?owner=${adminData._id}`);

      console.log("home loading: response is", response);

      setPosts([...response.data]);
    };

    getData();
  }, []);

  // const handleLogout = async () => {
  //   const response = await axios.get("/admin/logout");

  //   if (response.data.success) {
  //     // clear the context
  //     setAdminData(null);
  //   }
  //   // redirect user to home
  //   navigate("/");
  // };

  const handleSave = async (data) => {
    const response = await axios.patch(`/post/edit/${data._id}`, data);
    console.log("response is", response);

    setPosts(
      posts.map((post) =>
        post._id === response.data._id ? response.data : post
      ).sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      })
    );
    setEditingPost(null)
  };

  const handleLikeClick = async (postid) => {
    console.log("like clicked");

    const response = await axios.put(
      `/posts/likeadd/${postid}/${adminData._id}`
    );

    console.log("like add reponse is: ", response);

    if (response.data.success) {
      const postIdx = posts.findIndex((item) => item._id == postid);

      const oldPosts = [...posts];

      oldPosts[postIdx].likes = [...response.data.post.likes];

      setPosts([...oldPosts]);
    }
  };

  const handleCommentChange = (text, idx) => {
    // console.log('text', text, idx)

    const oldComments = [...comments];
    oldComments[idx] = text;

    setComments([...oldComments]);
  };

  const handleAddComment = async (idx) => {
    const data = {
      postid: posts[idx]._id, // post id
      text: comments[idx],
      owner: adminData._id,
    };

    const response = await axios.post(`/post/addComment/${data.postid}`, data);

    console.log("add comment response is", response);

    if (response.data.success) {
      const oldPosts = [...posts];

      oldPosts[idx].comments = [...response.data.post.comments];
      setPosts([...oldPosts]);
      setComments((comments) => {
        comments[idx] = "";
        return [...comments];
      });
    }
  };

  const handleShowComments = (idx) => {
    const oldComments = [...showComments];
    oldComments[idx] = !oldComments[idx]; // toggle show the comments

    setShowComments([...oldComments]);
  };

  const handleDeleteComment = async (postId, commentId) => {
    console.log("idx, cidx", postId, commentId);

    const response = await axios.delete(
      `/post/deleteComment/${postId}/${commentId}`
    );

    console.log("delete comment response is", response);

    if (response.data.success) {
      const oldPosts = [...posts];

      oldPosts[postId].comments = [...response.data.post.comments];
      setPosts([...oldPosts]);
    }
  };

  const handleEditComment = (idx, cidx) => {
    // get text from posts state
    const text = posts[idx].comments[cidx].text;

    setCommentToUpdate({
      postid: posts[idx]._id,
      commentid: posts[idx].comments[cidx]._id,
      text,
      idx,
    });
    setShowCommentModal(true);
  };

  const handleCommentSave = async () => {
    console.log("save comment pressed");

    const { postid, commentid, text } = commentToUpdate;

    const response = await axios.put(
      `/posts/comments/edit/${postid}/${commentid}`,
      { text }
    );

    console.log("edit comment response is", response);

    if (response.data.success) {
      const idx = commentToUpdate.idx;

      setShowCommentModal(false);
      const oldPosts = [...posts];

      // update the post state with the new array of comments for the specifc post
      oldPosts[idx].comments = [...response.data.post.comments];
      setPosts([...oldPosts]);

      setCommentToUpdate({
        postid: null,
        commentid: null,
        text: "",
        idx: null,
      });
    }
  };

  const [editingPost, setEditingPost] = useState(null);

  return (
    <div style={{ position: "relative" }}>
     

      {posts.map((item, idx) => (
        <div
          key={item._id}
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid",
            padding: "20px",
            paddingBottom:'40px',
            margin: "20px 60px",
            boxShadow: ' 2px 2px 4px 4px #A85CC4,  -2px -2px 4px 4px #A85CC4'
          }}
        >
          <div
            style={{
              padding: "30px",
              margin: "20px",
              alignItems: "center",
            }}
          >
            <div className="postAvatar">
              <img
                style={{ height: "50px", width: "50px", objectFit: "center" }}
                src={item.owner.image}
                alt=""
              />
              {item.owner.username}
              <button className='ediBt'onClick={() => setEditingPost(item)}>Edit Post</button>
            </div>
            <div className="postTitle"> {parse(item.title)}</div>
            <div className="postSubTitle"> {parse(item.subtitle)}</div>
             <div> {parse(item.body)}</div>
            
          </div>

          <hr style={{ width: "90%" }} />
          {
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span onClick={() => handleLikeClick(item._id)}></span>
              {/* <div>Likes: {item.likes.length}</div>  */}
              <div
                onClick={() => handleShowComments(idx)}
                style={{ cursor: "pointer", marginLeft: '70%' }}
              >
                Comments: {item.comments.length}
              </div>
            </div>
          }

          {/* show the comments */}
          {showComments[idx]
            ? item.comments.map((comment, cidx) => (
                <div
                  style={{ display: "flex", justifyContent: "space-between", marginRight:'6%', marginLeft:'4%', marginTop:'10px'  }}
                >
                  {comment.text}
                  <button onClick={() => handleDeleteComment(item._id, comment._id)}>
                    X
                  </button>
                </div>
              ))
            : null}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              marginLeft:'60px'
            }}
          >
            <textarea
              style={{ width: "85%" }}
              placeholder="Type your comment"
              value={comments[idx]}
              onChange={(e) => handleCommentChange(e.target.value, idx)}
            />
            <button className='commentBt' onClick={() => handleAddComment(idx)} >Add Comment</button>
          </div>
        </div>
      ))}
      {editingPost && (
        <div
          style={{
            backgroundColor: "white",
            position: "fixed",
            inset: 0,
            width:'80%',
            marginLeft:'20%',
            top: '18%'
          }}
        >
          <AddPost
            post={editingPost}
            onSave={handleSave}
            onCancel={() => setEditingPost(null)}
          />
        </div>
      )}
    </div>
  );
}
