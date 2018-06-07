const  DB_URI = 'mongodb://WaqasMongo:mongoPass00@ds247290.mlab.com:47290/friendsdb';
const TEST_DB_URI = 'mongodb://WaqasMongo:mongoPass00@ds247330.mlab.com:47330/friendsdbtest';

//default timeout for Mocha async tests
const MOCHA_TEST_TIMEOUT = 3000;


module.exports = {
  DB_URI,
  TEST_DB_URI,
  MOCHA_TEST_TIMEOUT
}


//this file is not used yet