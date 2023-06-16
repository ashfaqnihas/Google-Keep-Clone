import React, {useState} from 'react';
import './App.css';
//import Hello from './Hello';
import Header from './Component/Header/Header';
import CreateNote from './Component/Create_File/CreateNote';
import Footer from './Component/Footer/Footer';
import Note from './Component/Note/Note';

function App() {
     const [notes, setNotes] = useState([]);

     const addNote= (newNote)=>{
       setNotes((prevNotes)=> {
         return[...prevNotes, newNote];
      });
    
     };
       
const deleteNote= (id)=>{
       setNotes((prevNotes)=>{
         return prevNotes.filter((noteItem,index)=>{
             return index!==id
         })

       })
}

  return (
    <div className="App">
          <Header />
          <CreateNote addNote={addNote}/>
          {notes.map((note,index)=>{
            return(
              <Note id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
            )
          })}  
          <Footer />
         
    </div>
  );
}

export default App;
