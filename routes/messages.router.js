const express = require('express');

const messagesController = require('../controllers/messages.controller');

const messagesRouter = express.Router();

messagesRouter.get('/messages', messagesController.getMessages);
messagesRouter.post('/messages', messagesController.postMessages);

module.exports = messagesRouter;
