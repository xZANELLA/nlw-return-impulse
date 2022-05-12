import express from 'express'

const app = express()

app.use(express.json())

app.post('/feedbacks', (req, res) => {
    
    return res.send('Hello World')
})

app.listen(3333, () => {
    return console.log("HTTP server running!")
})