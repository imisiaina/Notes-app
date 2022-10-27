class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    
    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#message-input').value;
      this.addNewNote(newNote);
    });
  };

  displayNotes() {
    document.querySelector('#message-input').value = '';

    document.querySelectorAll('.notes').forEach(element => {
    element.remove();
    
    });
    const notes = this.model.getNotes();
    notes.forEach(note => {
      const notesEl = document.createElement("div");
      notesEl.textContent = note;
      notesEl.className = "notes";
      this.mainContainerEl.append(notesEl);
    });

    
  };

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  };


};


module.exports = NotesView;