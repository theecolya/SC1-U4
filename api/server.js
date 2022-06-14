const express = require('express');

const actionRoutes = require('./actions/actions-router');
const projectRoutes = require('./projects/projects-router');

const server = express();

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
server.use('/api/actions', actionRoutes)
// Build your projects router in /api/projects/projects-router.js
server.use('/api/projects', projectRoutes)
// Do NOT `server.listen()` inside this file!

module.exports = server;
