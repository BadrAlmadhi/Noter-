let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

// this code checks of the URL after the domain is equal to '/notes'
if (window.location.pathname === '/notes') {
    // select HTML elements
    noteTitle = document.querySelector('.note-title');
    noteText = document.querySelector('.note-textarea');
    saveNoteBtn = document.querySelector('.save-note');
    newNoteBtn = document.querySelector('.new-note');
}

// show element
const show = (elem) => {
    elem.style.display = 'inline';
}
// hide element
const hide = (elem) => {
    elem.style.display = 'none';
}

// track of note in the textarea
let activeNote = {};

// this code fetch to get data from the end URL api/notes 
const getNote = () =>{
    fetch('api/notes', {
        method: 'GET',
        headers: {
            // request will be in json format
            'Content-Type': 'application/json',
        },
    })
}

// this send the data 
const saveNote = (note) => 
    fetch('api/notes', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // convert object to a JSON string
        body: JSON.stringify(note),
    });

const deleteNote = (note) => 
fetch(`api/notes/${id}`, {
    method: 'DELETE',
    headers:{
        // we add headers to provide more information to the server to handle the data exchange
        'Content-Type':'application/json',
    },
});

const renderActiveNotes = () => {
    // this function control the visibility of the button based on the state of the active note
    hide(saveNoteBtn); // hide Save Button
// if active code has an id 
    if (activeNote.id) {
        noteTitle.setAttribute('readonly', true);
        noteText.setAttribute('readonly', true);
        noteTitle.value = activeNote.title;
        noteText.value = activeNote.text;
    } else {
        noteTitle.setAttribute('readonly');
        noteText.setAttribute('readonly');
        noteTitle.value = '';
        noteText.value = '';
    }
};

const handleNoteSave = () => {
    const newNote = {
        title: noteTitle.value,
        text: noteText.value,
    };
    saveNote(newNote).then(() => {
        getAndRenderNotes();
        renderActiveNotes();
    });
};


