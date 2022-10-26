const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('returns the notes', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it('adds new notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('resets the notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
})