const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//router
//app.use(require('./routes/index.js'));
app.use('/api/petstore', require('./routes/petstore'))

// starting the server 
app.listen(3000, () => {
console.log(`Server on port ${app.get('port')}`);
});