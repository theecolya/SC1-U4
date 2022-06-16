// Write your "actions" router here!
const express = require('express');

const router = express.Router();

const Actions = require('./actions-model')
const Wares = require('./actions-middlware')

router.get('/', (req, res) => {
    Actions.get().then((actions) => {
        res.status(200).json(actions)
    }).catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    Actions.get(req.params.id).then((action) => {
        action ? res.status(200).json(action) : 
        res.status(404).send(`no action found with id ${req.params.id}`)
    }).catch(err => console.log(err))
})

router.post('/', Wares.checkNotes, Wares.checkDesc, Wares.checkId, (req, res) => {
    Actions.insert(req.body).then((action) => {
        res.status(201).json(action)
    }).catch(err => console.log(err))
})

router.put('/:id', Wares.checkNotes, Wares.checkDesc, Wares.checkCompleted, Wares.checkId, (req, res) => {
    Actions.update(req.params.id, req.body).then((action) => {
        res.status(200).json(action)
    }).catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id).then((action) => {
        action ? res.status(200).send('Action successfully deleted') :
        res.status(404).send(`no action found with id ${req.params.id}`)
    }).catch(err => console.log(err))
})

module.exports = router;