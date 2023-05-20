// Boiler plate
const express = require ('express')
const app = express()
app.use(express.json())
const porta = 3000

// Import para DB
const { Client } = require('pg')
app.get('/medicos', async (req, res) => {
    try{
        const client = new Client({
            host: "localhost",
            user: "postgres",
            password: "1234",
            database: "hospital",
            port: 5432
        })
        await client.connect()
        results = await client.query('select * from tb_medico')
        console.log(results)
        await client.end
        res.status(200).send(results.rows)
    }
    catch (error){
        console.log(error)
    }
})


app.get('/pacientes', async (req, res) => {
    try{
        const client = new Client({
            host: "localhost",
            user: "postgres",
            password: "1234",
            database: "hospital",
            port: 5432
        })
        await client.connect()
        results = await client.query('select * from tb_paciente')
        console.log(results)
        await client.end
        res.status(200).send(results.rows)
    }
    catch (error){
        console.log(error)
    }
})


app.listen(porta, () => console.log(`Executando. Porta ${porta}`))
