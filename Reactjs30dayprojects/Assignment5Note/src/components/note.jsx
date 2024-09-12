import React, { useState, useEffect, useRef } from 'react';
import delete_icon from "../images/delete.png";

function NoteApp() {
    const [notes, setNotes] = useState([]);
    const noteRefs = useRef([]);

    useEffect(() => {
        const savedNotes = localStorage.getItem("notes");
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const handleAddNote = () => {
        setNotes([...notes, ""]);
        noteRefs.current.push(React.createRef());
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        noteRefs.current.splice(index, 1); 
    };

    const handleNoteChange = (index, newContent) => {
        const updatedNotes = notes.map((note, i) =>
            i === index ? newContent : note
        );
        setNotes(updatedNotes);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.target.contentEditable === "true") {
            document.execCommand("insertLineBreak");
            e.preventDefault();
        }
    };

    const handleBlur = (index) => {
        handleNoteChange(index, noteRefs.current[index].current.textContent);
    };

    return (
        <div className="container">
            <h1>Note</h1>
            <button className="btn" onClick={handleAddNote}>
                Create Note
            </button>
            <div className="notes-container">
                {notes.map((note, index) => (
                    <div
                        key={index}
                        className="input-box"
                        contentEditable
                        ref={noteRefs.current[index] = noteRefs.current[index] || React.createRef()}
                        suppressContentEditableWarning
                        onKeyDown={handleKeyDown}
                        onBlur={() => handleBlur(index)}
                    >
                        {note}
                        <img
                            src={delete_icon}
                            alt="Delete"
                            onClick={() => handleDeleteNote(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NoteApp;

// * {
//     margin: 0;
//     padding: 0;
//     font-family: 'Poppins', sans-serif;
//     box-sizing: border-box;
//   }
  
//   .container {
//     width: 100%;
//     min-height: 100vh;
//     background: linear-gradient(135deg, #cf9aff, #95c0ff);
//     color: #fff;
//     padding-top: 4%;
//     padding-left: 10%;
//   }
  
//   .container h1 {
//     display: flex;
//     align-items: center;
//     font-size: 30px;
//     font-weight: 600;
//   }
  
//   .container button {
//     display: flex;
//     align-items: center;
//     background: linear-gradient(#9498fd, #571094);
//     color: #fff;
//     font-size: 16px;
//     outline: 0;
//     border: 0;
//     border-radius: 40px;
//     padding: 15px 25px;
//     margin: 30px 0 20px;
//     cursor: pointer;
//   }
  
//   .notes-container {
//     display: flex;
//     flex-direction: column;
//   }
  
//   .input-box {
//     position: relative;
//     width: 100%;
//     max-width: 500px;
//     min-height: 150px;
//     background: #fff;
//     color: #333;
//     padding: 20px;
//     margin: 20px;
//     outline: none;
//     border-radius: 5px;
//   }
  
//   .input-box img {
//     width: 25px;
//     position: absolute;
//     bottom: 15px;
//     right: 15px;
//     cursor: pointer;
//   }
  
  
