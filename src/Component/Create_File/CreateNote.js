import React,{useState} from 'react'
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import "./CreateNote.css"
//import Note from '../Note/Note';

const Create_Note = (props) => {
    const[isExpanded, setIsExpended]= useState(false);

    const[note,setNote]=useState({
        title:"",
        content:""
    });

    const expand = ()=>{
        setIsExpended(true);
    };
    const handleChang=(event)=>{
        const {name, value}=event.target;
        setNote((prevNote)=>{
            return{
                ...prevNote,
                [name]:value,
            };
        });  
    };   
    const submitNote=(event)=>{
          event.preventDefault();  //can't relode page
          props.addNote(note);
          setNote({
              title:"",
              content:""
          })
          setIsExpended(false)
    }
    
    return (
        <div>
             <form className="create-note">
             {isExpanded && 
                  <input name="title" placeholder="Title"  type="text" onChange={handleChang} value={note.title}/> }
                    <textarea name="content" placeholder="Take a note" onClick={expand} onChange={handleChang} rows={isExpanded? 3 : 1} value={note.content} />
                  
                    <Zoom in={isExpanded}>
                        <Fab onClick={submitNote}>
                              <AddIcon />
                        </Fab>
                    </Zoom>
             </form>
        </div>
    )
}

export default Create_Note
