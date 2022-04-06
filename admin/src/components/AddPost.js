import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios'
import { useRef, useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import { AdminContext } from './context';

export default function AddPost () {
    const {adminData, setAdminData} = useContext(AdminContext)
    //Context
    
    const [tag, setTag] = useState('')

    const [data, setData] = useState({
        owner: null,
        body: '',
        title: '',
        subtitle: '',
        published: false,
        tags: []
    })

    const editorRef = useRef(null);

    const handleSave = async () => {

        if (editorRef.current.getContent()) {
            // setData({...data, body: editorRef.current.getContent()})
            console.log('Hande Save:', editorRef.current.getContent())
            console.log("Admin is:",adminData)
            console.log('data is', data)
            data.owner = adminData._id
    
            const response = await axios.post('/post/create', data)
    
            console.log('response is', response)
        }



    }

    const handleEditorChange = () => {
        setData({...data, body: editorRef.current.getContent()})
    }

    const handleTagSubmit = e => {
        e.preventDefault();

        console.log('this is form submit')
        // add Tag to the data object at property tags.
        setData({...data, tags: [...data.tags, tag]})
        setTag('')
    }

    const handleDeleteTag = (idx) => {
        const oldData = {...data}
        data.tags.splice(idx, 1)

        setData({...oldData})
    }

    return <div className="editor">

        <input placeholder='Type the title' value={data.title} onChange={e=> setData({...data, title: e.target.value})}/>
        <input placeholder='Type the subtitle' value={data.subtitle} onChange={e=> setData({...data, subtitle: e.target.value})}/>

    <Editor 
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue=""
         init={{
           height: 500,
           menubar: true,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo | redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
         onEditorChange={handleEditorChange}
       />

       <div>
           <form onSubmit={handleTagSubmit}>
                <input type="text" value={tag} onChange={e=> setTag(e.target.value)}/>
           </form>
           <div style={{display: 'flex'}}>
               {
                   data.tags.length ?
                    data.tags.map((item, idx) => <div style={{border: '1px solid', marginRight: '10px'}}key={idx}>{item} <span onClick={e => handleDeleteTag(idx)} style={{color:'red'}}>x</span></div>)
                   :

                   'No tags added'
               }
           </div>
       </div>

        <div style={{display: 'flex', justifyContent: "flex-end"}}>
            <Link to="/home">Home</Link>
        <button onClick={handleSave}>Save</button>
        </div>
    </div>
}