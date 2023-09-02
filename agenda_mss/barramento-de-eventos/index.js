const express = require('express');
//para enviar eventos para os demais microsserviços
const axios = require('axios');

const app = express();
app.use(express.json())

const eventos = [];

app.post('/eventos', (req, res) => {
    const evento = req.body
    eventos.push(evento)
    console.log(evento)
    // eviar evento para o microservico de lembretes
    axios.post('http://10.2.130.189:4000/eventos', evento).catch(err => console.log('Microserviço de lembretes fora do ar'))
    // eviar evento para o microservico de observacoes
    axios.post('http://10.2.130.189:5000/eventos', evento).catch(err => console.log('Microserviço de observacoes fora do ar'))
    // eviar evento para o microservico de consulta
    axios.post('http://10.2.130.189:6000/eventos', evento).catch(err => console.log('Microserviço de consulta fora do ar'))
    // eviar evento para o microservico de classificacao
    axios.post('http://10.2.130.189:7000/eventos', evento).catch(err => console.log('Microserviço de classificacao fora do ar'))

    res.status(200).send({msg:'ok'})
})

app.get("/eventos", (req, res) =>{
    res.send(eventos)
})

app.listen(10000, () => {
    console.log("barramento de eventos porta 10000")
})
