/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Router } from 'express';
import { postOneUser, getOneUser, deleteAllUser } from './controllers/userController';
import { getAllCreate, postOneCreate, deleteOneCreate } from './controllers/createController';
import {
  getPopularDiscover, getByGenreDiscover, getByOLIDDiscover, getByIdDiscover, postVoteDiscover,
} from './controllers/discoverController';
import {
  getAllStudy, getOneStudy, saveOneStudy, deleteOneStudy,
} from './controllers/studyController';

const router = Router();

// for new user
router.post('/users', postOneUser);

// this route is just used for development/testing
router.get('/users/:email', getOneUser);

// this route is just used for development/testing
router.delete('/users', deleteAllUser);

// for created decks
router.get('/myDecks/:email', getAllCreate);

router.post('/myDecks/:email', postOneCreate);

router.delete('/myDecks/:email-:id', deleteOneCreate);

// for saved decks
router.get('/savedDecks/:email', getAllStudy);

router.get('/savedDeck/:email-:id', getOneStudy);

router.post('/savedDecks/:email', saveOneStudy);

router.delete('/savedDecks/:email-:id', deleteOneStudy);

// for discover decks
router.get('/discover', getPopularDiscover);

router.get('/discover/genre/:genre', getByGenreDiscover);

router.get('/discover/OLID/:OLID', getByOLIDDiscover);

router.get('/discover/:id', getByIdDiscover);

router.get('/discover/vote/:id-:direction', postVoteDiscover);

export default router;
