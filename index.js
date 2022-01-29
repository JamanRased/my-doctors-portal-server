const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient } = require('mongodb');

require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(cors());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vrvfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('MongoDB Connected Successfully');
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello Doctors Portal!')
  })
  
  

app.listen(port, () => {
  console.log(`Successfully Database Conect Doctors Portal ${port}`)
})
