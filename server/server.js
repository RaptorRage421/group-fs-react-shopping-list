const express = require('express');
const app = express();
const shoppingRouter = require('./shoppingRouter.js')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));
app.use(express.urlencoded({ extended: true }))
/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.use('/api/shoppinglist', shoppingRouter)

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
