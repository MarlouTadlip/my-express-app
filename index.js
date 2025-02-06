const express = require('express')
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json())
app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.get('/about', (req,res) => {
    res.send('About Us')
})

app.post('/submit', (req,res) => {
    const data = req.body
    res.send(`Received: ${JSON.stringify(data)}`)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})  