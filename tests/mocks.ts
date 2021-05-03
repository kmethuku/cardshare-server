// CARDS
export const testCard = {
  question: 'Are you a test card?',
  answer: 'Yes.',
};

export const testCardArray = [
  {
    question: 'Are you the first test card?',
    answer: 'Yes.',
  },
  {
    question: 'Are you the first test card?',
    answer: 'No.',
  },
  {
    question: 'Are you the third test card?',
    answer: 'Yes.',
  },
];

// DECKS
export const testDeck = {
  title: 'Test Deck',
  description: 'A deck for testing',
  src: 'imagesrc',
  cards: testCardArray,
  genre: 'self-growth',
  OLID: 'OLIDtest',
  votes: 12,
  creator: 'Me',
};

export const testDeckArray = [
  {
    title: 'Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'history',
    OLID: 'OLID1',
    votes: 12,
    creator: 'Me',
  },
  {
    title: 'Second Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'self-growth',
    OLID: 'OLID2',
    votes: 2,
    creator: 'Me',
  },
  {
    title: 'Third Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'self-growth',
    OLID: 'OLID3',
    votes: 15,
    creator: 'Me',
  },
];

export const testUnpopularDeckArray = [
  {
    title: 'First Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'history',
    OLID: 'OLIDunpopular1',
    votes: 9,
    creator: 'Me',
  },
  {
    title: 'Second Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'self-growth',
    OLID: 'OLIDunpopular2',
    votes: 5,
    creator: 'Me',
  },
];

export const testPopularDeckArray = [
  {
    title: 'First Popular Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'history',
    OLID: 'OLIDpopular1',
    votes: 10,
    creator: 'Me'
  },
  {
    title: 'Second Popular Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'self-growth',
    OLID: 'OLIDpopular2',
    votes: 20,
    creator: 'Me',
  },
];

export const testHistoryDeckArray = [
  {
    title: 'First Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'history',
    OLID: 'OLIDhistory',
    votes: 8,
    creator: 'Me',
  },
];

export const testSelfGrowthDeckArray = [
  {
    title: 'First Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'self-growth',
    OLID: 'OLIDselfgrowth',
    votes: 8,
    creator: 'Me',
  },
];

export const resultDeck = {
  creator: 'Me',
  description: 'A deck for testing',
  genre: 'TestFiction',
  src: 'imagesrc',
  title: 'Test Deck',
  votes: 12,
};

// USERS
export const testUser = {
  username: 'testUser',
  email: 'test@user.com',
  myDecks: [],
  savedDecks: [],
};

export const testUserArray = [
  {
    username: 'testUserOne',
    email: 'test@userone.com',
    myDecks: [],
    savedDecks: [],
  },
  {
    username: 'testUserTwo',
    email: 'test@usertwo.com',
    myDecks: testDeckArray,
    savedDecks: [],
  },
  {
    username: 'testUserThree',
    email: 'test@userthree.com',
    myDecks: testUnpopularDeckArray,
    savedDecks: testPopularDeckArray,
  },
  {
    username: 'testUserFour',
    email: 'test@userfour.com',
    myDecks: testPopularDeckArray,
    savedDecks: [],
  },
  {
    username: 'testUserFive',
    email: 'test@userfive.com',
    myDecks: testHistoryDeckArray,
    savedDecks: [],
  },
  {
    username: 'testUserSix',
    email: 'test@usersix.com',
    myDecks: testSelfGrowthDeckArray,
    savedDecks: [],
  },
];

export const discoverUserArrayResult = ['testUserTwo', 'testUserFour'];
export const discoverHistoryArrayResult = ['testUserTwo', 'testUserThree', 'testUserFour', 'testUserFive'];
export const discoverSelfGrowthArrayResult = ['testUserTwo', 'testUserThree', 'testUserFour', 'testUserSix'];

const mocks = {
  testUser,
  testUserArray,
  testCard,
  testCardArray,
  testDeck,
  testDeckArray,
  resultDeck,
  discoverUserArrayResult,
  discoverHistoryArrayResult,
  discoverSelfGrowthArrayResult,
};

export default mocks;
