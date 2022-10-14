const mongoose = require ('mongoose')

const dbName ="codeEntry"

mongoose.connect('mongodb://localhost/dailyCode', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
//newUrlParser and useTopology are options we pass to get rid of deprecation messages in our terminal 


    .then(() => console.log(`Made a connection with ${dbName}`))
    .catch((err) => console.log(err))