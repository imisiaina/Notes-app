/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesModel = require('./model');
 const NotesView = require('./notesView');
  
  describe('Notes view', () => {
    beforeEach(() => {
      document.body.innerHTML = fs.readFileSync('./index.html');
    });
 
    it('displays notes', () => {
     const model = new NotesModel();
     const view = new NotesView(model);
 
     model.addNote('this is a note');
     model.addNote('and this');
     view.displayNotes();
    
 
     expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
 });