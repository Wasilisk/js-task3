const Router = require('express')
const router = new Router()
const NoteController = require('../controllers/noteController')
const validation = require('../validations/noteValidation')
const noteSchema = require('../middleware/validationMiddleware')

router.post('/notes', validation(noteSchema), NoteController.create)
router.delete('/notes/:id', NoteController.delete)
router.patch('/notes/:id', NoteController.update)
router.get('/notes/:id', NoteController.getOne)
router.get('/notes', NoteController.getAll)
router.get('/notes/stats', NoteController.getStats)

module.exports = router

