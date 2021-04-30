declare global {
  // eslint-disable-next-line no-unused-vars
  namespace NodeJS {
    // eslint-disable-next-line no-unused-vars
    interface ProcessEnv {
      DB_URI: string = 'mongodb+srv://admin:cardshare1234@cluster0.hxpqg.mongodb.net/cardshare?retryWrites=true&w=majority'
      NODE_ENV: 'development' | 'production' | 'test';
      PORT?: string;
    }
  }
}

export {};
