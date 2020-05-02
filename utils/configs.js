const dbName = 'right-for-life';
const dbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  dbName: dbName,
};

module.exports.jwt_secret = 'ita-right.for.life_secret';
module.exports.dbName = dbName;
// module.exports.dbURL = `mongodb://localhost:27017/right-for-life`;
// module.exports.animalsCollectionName = 'animals';
module.exports.serverPort = 4000;
// module.exports.frontURL = 'http://localhost:5000';
module.exports.dbOptions = dbOptions;
module.exports.connectionURI = `mongodb+srv://root:root@animalsforlife-goij5.mongodb.net/${dbName}?retryWrites=true&w=majority`;