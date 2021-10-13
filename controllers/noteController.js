const noteService = require('../services/noteService')

class NoteController {
    async create(req, res) {
        try {
            const {name, category, content, dates} = req.body;
            const newNote = await noteService.create(name, category, content, dates);
            return res.json(newNote);
        } catch (error) {
            return res.status(400).json({error});
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            await noteService.delete(id);
            return res.json({message: "The note was successfully deleted"});
        } catch (error) {
            return res.status(400).json({error});
        }
    }

    async update(req, res) {
        try {
            const {name, category, content, dates} = req.body;
            const {id} = req.params;
            const editNote = await noteService.update(id, {name, category, content, dates});
            return res.json(editNote);
        } catch (error) {
            return res.status(400).json({error});
        }
    }

    async getOne(req, res) {

    }

    async getAll(req, res) {

    }

    async getStats(req, res) {

    }
}

module.exports = new NoteController();