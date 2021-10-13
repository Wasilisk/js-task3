let store = require('../store')

class NoteRepository {

    create(name, category, content, dates, currentDate) {
        let newNote = {
            id: store.length + 1,
            name,
            created: currentDate,
            category,
            content,
            dates,
            archived: false
        }
        store.push(newNote)
        return newNote
    }

    delete(id) {
        store = store.filter(note => note.id != id)
    }

    update(id, noteValues) {
        let editNote;
        store = store.map(note => {
            if(note.id == id) {
                note.name = noteValues.name;
                note.category = noteValues.category;
                note.content = noteValues.content;
                note.dates = noteValues.dates;
                editNote = note;
            }
        })

        return editNote;
    }

}

module.exports = new NoteRepository();