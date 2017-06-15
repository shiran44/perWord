
const mongoose = require('mongoose'),
    schema = mongoose.Schema;


    wordSchema = new schema({
    hebrew: {type:String, index:1},
    english: String,
    randomWords: [String],
}, {collection: 'words'});


const words= mongoose.model('words',wordSchema);
module.exports=words;


console.log(`required paths: ${wordSchema.requiredPaths()}`);
console.log(`indexes: ${JSON.stringify(wordSchema.indexes())}`);

