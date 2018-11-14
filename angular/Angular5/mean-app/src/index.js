const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');

//const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');

//settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//middlewares
app.use(cors());
app.use(express.json()); //expres > 4.16.2++   have bodyParser, but if version < 4.16.2 install dependendy bodyParser
app.use(express.urlencoded({extended: false})); // can receive data from url 

//routes
//app.use(indexRoutes);
app.use('/api',tasksRoutes);

//static files
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});