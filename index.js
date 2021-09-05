const express = require('express')

const app = express()

const link = 'https://github.com/jheremois'

app.use(
    (req, res)=>{
        res.redirect(link)
    },
    ()=>{
        console.log('?');
    }
)
app.get('/*', (req, res)=>{
    res.redirect(link)
}, ()=>{
    console.log('!');
})


app.listen(process.env.PORT || 4000, ()=>{
    console.log('En linea en el puerto 4000');
})