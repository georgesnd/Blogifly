import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios'
import { useRef, useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import { AdminContext } from './context';
import '../stylesAdmin/homeContent.css'

export default function AddPost ({post, onSave, onCancel}) {
    const {adminData, setAdminData} = useContext(AdminContext)
    //Context
    
    const [tag, setTag] = useState('')

    const [data, setData] = useState(post || {
        owner: adminData?._id,
        body: '',
        title: '',
        subtitle: '',
        published: false,
        tags: []
    })

    const editorRef = useRef(null);

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
         initialValue={post?.body ?? ""}
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

                   'Add a tag'
               }
           </div>
       </div>

        <div style={{display: 'flex', justifyContent: "flex-end"}}>
            
        <button className='commentBt' onClick={() => onSave(data)}>Save</button>
        {onCancel && <button onClick={() => onCancel(data)}>Cancel</button>}
        </div>
    </div>
}