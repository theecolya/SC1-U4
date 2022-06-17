// Write your "projects" router here!
const express = require('express');

const router = express.Router();

const Projects = require('./projects-model')
const Wares = require('./projects-middleware')

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

router.post('/', Wares.checkName, Wares.checkDesc, (req, res) => {
    Projects.insert(req.body).then((project) => {
       res.status(201).json(project)
    })
    .catch(err => console.log(err))
})

router.put('/:id', Wares.checkName, Wares.checkDesc, Wares.checkCompleted, (req, res) => {
    Projects.update(req.params.id, req.body).then((project) => {
        res.status(200).json({...req.body}); console.log(res)
    }).catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id).then((project) => {
        project ? res.status(200).send('Project successfully deleted') :
        res.status(404).send(`no project found with id ${req.params.id}`)
    }).catch(err => console.log(err))
})

router.get('/:id/actions', (req, res) => {
    Projects.getProjectActions(req.params.id).then((project) => {
        res.status(200).json(project)
    }).catch(err => console.log(err))
})

module.exports = router;