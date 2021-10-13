const NoteService = require('../services/noteService')

class NoteController {
    async create(req, res) {
        try {
            const {name, category, content, dates} = req.body;
            const newNote = await NoteService.create(name, category, content, dates);
            return res.json(newNote);
        } catch (error) {
            return res.status(400).json({error});
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            await NoteService.delete(id);
            return res.json({message: "The note was successfully deleted"});
        } catch (error) {
            return res.status(400).json({error});
        }
    }

    async update(req, res) {
        try {
            const {name, category, content, dates} = req.body;
            const {id} = req.params;
            const editNote = await NoteService.update(id, {name, category, content, dates});
            return res.json(editNote);
        } catch (error) {
            return res.status(400).json({error});
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;

            const note = await NoteService.getOne(id)

            return res.json(note);
        } catch (error) {
            return res.status(400).json({error});
        }
    }

    async getAll(req, res) {
        try {
            const allNotes = await NoteService.getAll()

            return res.json(allNotes);
        } catch (error) {
            return res.status(400).json({error});
        }
    }

    async getStats(req, res) {
        try {
            const noteStats = await NoteService.getStats()
            return res.json(noteStats);
        } catch (error) {
            return res.status(400).json({error});
        }
    }
}

module.exports = new NoteController();