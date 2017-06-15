const   express    = require('express'),
        app        = express(),
        business=require('./wordsController'),
        port       = process.env.PORT || 3000;


app.get('/getAllData',
   (req,res)=>{
      business.allwords().then(docs => res.json(docs));
});


app.listen(port,
    () => {
        console.log(`listening on port ${port}`);
    });