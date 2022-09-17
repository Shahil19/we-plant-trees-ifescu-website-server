const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
// require('dotenv').config()

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://shahil:RwAGRsMzs1UQr6Xu@cluster0.by9i8m0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {

    const userCollection = client.db('IFESCU').collection("users")

    // ------------------------------------------------
    // ------- GET Methods
    // ------------------------------------------------
    // get All Users
    app.get('/users', async (req, res) => {
      const query = req.query
      const users = await userCollection.find(query).toArray()
      res.send(users)
    })

    // ------------------------------------------------
    // ------- POST Methods
    // ------------------------------------------------

  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})