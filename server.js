const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'OSCAR DUQUE',
        anio: new Date().getFullYear()
    });

});
app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'OSCAR DUQUE',
        anio: new Date().getFullYear()
    });

});



// app.get('/home', (req, res) => {
//     res.send('Hello Data');
// })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});