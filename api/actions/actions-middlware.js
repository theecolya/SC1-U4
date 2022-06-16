// add middlewares here related to actions
const checkNotes = (req, res, next) => {
    if(!req.body.notes) {
        res.status(400).send('Ouch: notes is required')
    } else { next() }
}

const checkDesc = (req, res, next) => {
    if(!req.body.description) {
        res.status(400).send('Ouch: description is required')
    } else { next() }
}

const checkId = (req, res, next) => {
    if(!req.body.project_id) {
        res.status(400).send('Ouch: project id is required')
    } else { next () }
}

const checkCompleted = (req, res, next) => {
    if(!req.body.completed) {
        res.status(400).send('Ouch: completed is required')
    } else { next() }
}

module.exports = {
    checkNotes,
    checkDesc,
    checkId,
    checkCompleted
}