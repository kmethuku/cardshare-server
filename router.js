const router = require('express').Router();
const userController = require('./controllers/userController');
const createController = require('./controllers/createController');
const studyController = require('./controllers/studyController');
const discoverController = require('./controllers/discoverController');

// for new user
router.post('/users', userController.postOne);

// for created decks
router.get('/myDecks', createController.getAll);

router.post('/myDecks', createController.postOne);

router.delete('/myDecks/:id', createController.deleteOne);

// for saved decks
router.get('/savedDecks', studyController.getAll);

router.post('/savedDecks', studyController.saveOne);

router.delete('/savedDecks/:id', studyController.deleteOne);

// for discover decks
router.get('/discover', discoverController.getPopular);

router.get('/discover/genre', discoverController.getByGenre);

router.get('/discover/key', discoverController.getByKey);

router.post('/discover/vote', discoverController.postVote);

module.exports = router;