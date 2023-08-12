const express = require('express');
//para enviar eventos para os demais microsserviços
const axios = require('axios');

const app = express();
app.use(express.json())

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    // eviar evento para o microservico de lembretes
    axios.post('http://localhost:4000/eventos', evento)
    // eviar evento para o microservico de observacoes
    axios.post('http://localhost:5000/eventos', evento)
    // eviar evento para o microservico de consulta
    axios.post('http://localhost:6000/eventos', evento)
    // eviar evento para o microservico de classificacao
    axios.post('http://localhost:7000/eventos', evento)

    res.status(200).send({msg:'ok'})
})

app.listen(10000, () => {
    console.log("barramento de eventos porta 10000")
})
