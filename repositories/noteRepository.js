let store = require('../store')

class NoteRepository {

    async create(name, category, content, dates, currentDate) {
        let newNote = {
            id: store.notes.length + 1,
            name,
            created: currentDate,
            category,
            content,
            dates,
            archived: false
        }
        store.notes.push(newNote)
        return newNote
    }

    async delete(id) {
        store.notes = store.notes.filter(note => note.id != id)
    }

    async update(id, noteValues) {
        let editNote;
        store.notes = store.notes.map(note => {
            if(note.id == id) {
                note.name = noteValues.name;
                note.category = noteValues.category;
                note.content = noteValues.content;
                note.dates = noteValues.dates;
                editNote = note;
            }
            return note;
        })

        return editNote;
    }

    async getOne(id) {
        return store.notes.filter(note => note.id == id)[0];
    }

    async getAll() {
        return store.notes;
    }

}

module.exports = new NoteRepository();