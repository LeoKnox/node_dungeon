const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/dungeon', (req, res) => {
    roomData = {
        menu: {room:"Room", hallway:"Hallway"}
    }
    res.render('room', roomData);
});

app.get('/monster', (req, res) => {
    res.render('monster');
});

app.get('/feature', (req, res) => {
    res.render('feature');
});

app.listen(3000, function() {
    console.log('listening on port 3000');
});