var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://hospital:100200300kr@hospital.vv63kwn.mongodb.net/test",
{useNewUrlParser: true,
useFindAndModify:false,
useUnifiedTopology:true}
);

module.exports = {mongoose};
