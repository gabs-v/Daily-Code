const express = require("express");
const { listIndexes } = require("./models/entry.model");
const app = express();

const dbName = 'codeEntry';

app.use(express.json(),
express.urlencoded({ extended: true}));



require("./config/mongoose.config");
require ("./routes/entry.routes")(app);

app.listen(8000,() => console.log(`connected to ${dbName} !!!`))