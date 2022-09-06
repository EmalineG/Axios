//import server code: express and cors

const express = require('express')
const cors = require('cors') //Cross Origin Resource Sharing

//invoke express variable and save to app variable

const app = express()

// set up Middleware

app.use(express.json()) //allows server to accept JSON object
app.use(cors()) // allows server to activate CORS

app.get('/api/inventory', (req, res) => {
    console.log(req.body)
    console.log(req.query)
    console.log(req.params)

    res.status(200).send(dummyDatabase)
})

app.get('/api/inventory/:id', (req, res) => {


    let index = req.params.id
    console.log(dummyDatabase[+req.params.id])
})

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });

  app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);

  });
//Open door for server to receive request

app.listen(5050, () => {
    console.log('Server is running on port 5050')
}) 