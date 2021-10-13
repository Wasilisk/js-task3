const dateFormat = require("../helpers/dateFormat");
const NoteRepository = require("../repositories/noteRepository")

class NoteService {
    async create(name, category, content, dates) {
        const currentDate = dateFormat();
        return NoteRepository.create(name, category, content, dates, currentDate)
    }

    async delete(id) {
        NoteRepository.delete(id)
    }

    async update(id, noteValues) {
        return NoteRepository.update(id, noteValues)
    }

    async getOne(noteId) {

    }

    async getAll() {

    }

    async getStats() {

    }
}

module.exports = new NoteService();