/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView');
  
  describe('NotesView', () => {
    beforeEach(() => {
      document.body.innerHTML = fs.readFileSync('./index.html');
    });
 
    it('displays notes', () => {
     const model = new NotesModel();
     const view = new NotesView(model);
     model.addNote('this is a note');
     model.addNote('and this');
     view.displayNotes();
     expect(document.querySelectorAll('div.notes').length).toEqual(2);
    });

    it('adds a note', () => {
      const model = new NotesModel();
      const view = new NotesView(model);

      const input = document.querySelector('#message-input');
      input.value = 'This is a new note';
      
      const button = document.querySelector('#add-note-button');
      button.click();

      expect(document.querySelectorAll('div.notes').length).toEqual(1);
      expect(document.querySelectorAll('div.notes')[0].textContent).toEqual('This is a new note');
     });

     it('displays notes twice', () => {
      const model = new NotesModel();
      const view = new NotesView(model);
      model.addNote('this is a note');
      model.addNote('and this');
      view.displayNotes();
      view.displayNotes();
      expect(document.querySelectorAll('div.notes').length).toEqual(2);
     });
     
 });