// add middlewares here related to projects
const checkBody = (req, res, next) => {
    if(!req.body.name || !req.body.description || !req.body.completed) {
        res.status(400).send('Ouch: missing info')
    } else { next() }
}

module.exports = {
    checkBody
}
