
// USERS
export const testUser = {
  username: 'testUser',
  email: 'test@user.com'
}

export const testUserArray = [
  {
    username: 'testUserOne',
    email: 'test@userOne.com'
  },
  {
    username: 'testUserTwo',
    email: 'test@userTwo.com'
  }
]

// CARDS
export const testCard = {
  question: 'Are you a test card?',
  answer: 'Yes.'
}

export const testCardArray = [
  {
    question: 'Are you the first test card?',
    answer: 'Yes.'
  },
  {
    question: 'Are you the first test card?',
    answer: 'No.'
  },
  {
    question: 'Are you the third test card?',
    answer: 'Yes.'
  }
]


// DECKS
export const testDeck = {
  title: 'Test Deck',
  description: 'A deck for testing',
  src: 'imagesrc',
  cards: testCardArray,
  genre: 'TestFiction',
  OLID: 'NOTHING',
  votes: 12,
  creator: 'Me'
}

export const testDeckArray = [
  {
    title: 'Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'TestFiction',
    OLID: 'SOMETHING',
    votes: 12,
    creator: 'Me'
  },
  {
    title: 'Other Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'TestFiction',
    OLID: 'NOTHING',
    votes: 2,
    creator: 'Me'
  },
  {
    title: 'Third Test Deck',
    description: 'A deck for testing',
    src: 'imagesrc',
    cards: testCardArray,
    genre: 'TestHistory',
    OLID: 'NOTHING',
    votes: 15,
    creator: 'Me'
  }
]

const mocks = { testUser, testUserArray, testCard, testCardArray, testDeck, testDeckArray }

export default mocks;
