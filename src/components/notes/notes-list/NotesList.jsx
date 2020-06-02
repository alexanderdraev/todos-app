import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllNotes, deleteNote } from '../../../core/api/notes.api';
import { NoteCard } from '../note-card/NoteCard';

const notesListStyle = {
    margin: '5px',
    flexWrap: 'wrap'
}

export function NotesList(props) {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const searchParam = props.location.search.split('=')[1];
        getAllNotes(searchParam).then((result) => {
            setNotes(result);
        });
    }, [props.location.search]);

    const onDelete = (id) => {
        deleteNote(id).then(() => {
            setNotes((prevState) =>{
                return prevState.filter(notes => notes.id !== id);
            })
        })
    };

    return (
        <div className="notes-list-wrapper d-flex" style={notesListStyle} >
            {notes.map(note => <NoteCard note={note} key={note.id} onDeleteClick={onDelete}/>)}
        </div>
    );
}
