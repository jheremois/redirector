const express = require('express')

const app = express()

const link = 'https://www.linkedin.com/in/jheremy-ricardo-castro-guerrero-3a85521a0/'

app.use(
    (req, res)=>{
        res.redirect(link)
    }
)
app.get('/*', (req, res)=>{
    res.redirect(link)
})


app.listen(process.env.PORT || 4000)