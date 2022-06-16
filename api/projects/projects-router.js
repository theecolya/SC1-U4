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

module.exports = router;