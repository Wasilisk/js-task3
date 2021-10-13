const dateFormat = require('../helpers/dateFormat');
const getNotesCount = require('../helpers/getNotesCount')
const NoteRepository = require('../repositories/noteRepository')
const CategoryRepository = require('../repositories/categoryRepository')

class NoteService {
    async create(name, category, content, dates) {
        const currentDate = dateFormat();
        return await NoteRepository.create(name, category, content, dates, currentDate)
    }

    async delete(id) {
        await NoteRepository.delete(id)
    }

    async update(id, noteValues) {
        const updateNote = await NoteRepository.update(id, noteValues)
        if(!updateNote) {
            throw `Note with id: ${id} doest exist`
        }
        return updateNote;
    }

    async getOne(id) {
        const note = await NoteRepository.getOne(id)
        if(!note) {
            throw `Note with id: ${id} doest exist`
        }
        return note;
    }

    async getAll() {
        return await NoteRepository.getAll()
    }

    async getStats() {
        const allNotes = await NoteRepository.getAll()
        let noteStats = {};
        let categories = await CategoryRepository.getAll()
        categories.forEach(category => {
            noteStats[`${category}`] = {
                active: getNotesCount(allNotes, category, false),
                archived: getNotesCount(allNotes, category, true)
            }
        })
        return noteStats;
    }
}

module.exports = new NoteService();