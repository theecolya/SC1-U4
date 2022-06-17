// add middlewares here related to projects
const checkBody = (req, res, next) => {
    if(typeof req.body.name != 'string' || typeof req.body.description != 'string' || typeof req.body.completed != 'boolean') {
        res.status(400).send('Ouch: missing info')
        return
    } next()
}

module.exports = {
    checkBody
}
