const express = require('express')

const app = express()

const link = 'https://github.com/jheremois'

app.use(
    (req, res)=>{
        res.redirect(link)
    }
)
app.get('/*', (req, res)=>{
    res.redirect(link)
})


app.listen(process.env.PORT || 4000)