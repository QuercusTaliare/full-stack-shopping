// NODE_ENV will get set to production 
if (process.env.NODE_ENV !== 'production') {

  const dotenv = require('dotenv');
  // Reading our .env file and saving those variables into memory so our program can acess them!
  const result = dotenv.config();
  
  if(result.error) {
    throw result.error
  }

}

console.log(`Don't tell anyone, but my best friend is ${process.env.BEST_FRIEND}`);