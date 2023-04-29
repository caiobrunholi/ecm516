const express = require('express')
const app = express()

app.get('/lembretes', (req, res) =>{
    res.send('você chamou o get')
})

app.post('/lembretes', (req, res) =>{
    res.send('você chamou post')
})


app.listen(4000, () => {
    console.log('lembretes. Porta 4000.')
})