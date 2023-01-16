const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
//setting port

app.set('port', process.env.PORT | 8021);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT'],
    optionsSuccessStatus: 200
}));
app.use(require('./routes/productos'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(app.get('port'), function() {
    console.log(`Server started on por ${app.get('port')}`);

});