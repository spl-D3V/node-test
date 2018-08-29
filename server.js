const port = process.env.PORT || 3000;
const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})

app.use(express.static(__dirname+'/public'));

app.use((req, res, next)=>{
    let now = new Date().toString();
    console.log(now);
    next();
});

app.get('/', (req, res)=>{
    res.render('home.hbs', {
        principal:'Alguna cosa',
        pageTitle:'Bienvenido'
    });
});

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageTitle:'Sobre...'
    });
});

app.get('/rockets', (req, res)=>{
    res.render('rockets.hbs');
});

app.listen(port, ()=>{
    console.log(`server up in ${port}`);
});