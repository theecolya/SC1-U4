// add middlewares here related to projects
const checkName = (req, res, next) => {
    if(!req.body.name) {
        res.status(400).send('Ouch: name is required')
    } else { next() }
}

const checkDesc = (req, res, next) => {
    if(!req.body.description) {
        res.status(400).send('Ouch: description is required')
    } else { next() }
}

const checkCompleted = (req, res, next) => {
    if(req.body.completed !== true || req.body.completed !== false) {
        res.status(400).send('Ouch: completed is required')
    } else { next() }
}

module.exports = {
    checkName,
    checkDesc,
    checkCompleted
}
