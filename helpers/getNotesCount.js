const getNotesCount = (notes, category, archived) =>
    notes.filter(note => note.category === category && note.archived === archived).length

module.exports = getNotesCount;