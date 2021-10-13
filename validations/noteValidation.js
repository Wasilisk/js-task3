const yup = require('yup')

const noteSchema = yup.object({
    name: yup.string().required(),
    category: yup.string().required(),
    content: yup.string(),
    dates: yup.string(),
})

module.exports = noteSchema;