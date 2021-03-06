const Router = require('express')
const router = new Router()
const NoteController = require('../controllers/noteController')
const validation = require('../middleware/validationMiddleware')
const noteSchema = require('../validations/noteValidation')

router.post('/notes', validation(noteSchema), NoteController.create)
router.delete('/notes/:id', NoteController.delete)
router.patch('/notes/:id', validation(noteSchema), NoteController.update)
router.get('/notes/stats', NoteController.getStats)
router.get('/notes/:id', NoteController.getOne)
router.get('/notes', NoteController.getAll)

module.exports = router

