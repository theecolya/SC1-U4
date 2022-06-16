// Write your "projects" router here!
const express = require('express');

const router = express.Router();

const Projects = require('./projects-model')

router.get('/', (req, res) => {
    Projects.get().then((project) => {
        res.status(200).json(project)
    })
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    Projects.get(req.params.id).then((project) => {
        project ? res.status(200).json(project) :
        res.status(404).send(`no project found with id ${req.params.id}`)
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    Projects.insert(req.body).then((project) => {
        res.status(201).json(project)
    })
    .catch(err => console.log(err))
})

module.exports = router;