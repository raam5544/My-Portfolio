// ----------------------------[Requires]

const express = require("express");
const bodyParser = require('body-parser')

const path = require("path");

const form = require('./src/Routes/api/form')

const port = 3001;  
const app = express();
// ----------------------------[Middleware]
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
// app.use(require('./config/checkToken'));
// app.use('/QueryForm', require('./Routes/api/form'));
// app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
// app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));


// ----------------------------[Routes]
// app.get("/*", function (req, res) {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.use('/Q', form)

// ----------------------------[Server]
app.listen(3001, function () {
    console.log(`Express app running on port ${port}`);
});