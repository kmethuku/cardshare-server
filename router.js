const router = require('express').Router();
const userController = require('./controllers/userController');
const createController = require('./controllers/createController');
const studyController = require('./controllers/studyController');
const discoverController = require('./controllers/discoverController');

// for new user
router.post('/users', userController.postOne);

router.get('/users/:email', userController.getOne);

router.delete('/users', userController.deleteAll);

// for created decks
router.get('/myDecks/:email', createController.getAll);

router.post('/myDecks/:email', createController.postOne);

router.delete('/myDecks/:email-:id', createController.deleteOne);

// for saved decks
router.get('/savedDecks/:email', studyController.getAll);

router.post('/savedDecks/:email', studyController.saveOne);

router.delete('/savedDecks/:email-:id', studyController.deleteOne);

// for discover decks
router.get('/discover', discoverController.getPopular);

router.get('/discover/genre/:genre', discoverController.getByGenre);

router.get('/discover/OLID/:OLID', discoverController.getByOLID);

router.get('/discover/:id', discoverController.getById);

router.post('/discover/vote/:id-:direction', discoverController.postVote);

module.exports = router;