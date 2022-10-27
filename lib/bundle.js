(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          return this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#add-note-button").addEventListener("click", () => {
            const newNote = document.querySelector("#message-input").value;
            this.addNewNote(newNote);
          });
        }
        displayNotes() {
          document.querySelector("#message-input").value = "";
          document.querySelectorAll(".notes").forEach((element) => {
            element.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const notesEl = document.createElement("div");
            notesEl.textContent = note;
            notesEl.className = "notes";
            this.mainContainerEl.append(notesEl);
          });
        }
        addNewNote(newNote) {
          this.model.addNote(newNote);
          this.displayNotes();
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  model.addNote("This is an example note");
  var view = new NotesView(model);
  view.displayNotes();
})();
