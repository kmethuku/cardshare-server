const router = require('express').Router();
const createController = require('./controllers/createController');

router.get('/myDecks', createController.getAll);

router.get('/myDecks/:id', createController.getOne);

router.post('/myDecks', createController.postOne);

router.delete('/myDecks/:id', createController.deleteOne);

module.exports = router;