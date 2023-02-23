const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const DB_URL = "mongodb+srv://admin:YnGK2ixOqEdBJy8Q@cluster0.vgwirza.mongodb.net";
const DB_NAME = "ocean-fullstack-09-02-2023";

async function main() {
    console.log("Trying to connect to database...")
    const client = await MongoClient.connect(DB_URL);
    const db = client.db(DB_NAME);
    const collection = db.collection("itens");
    console.log("Successfully connected!")

    const app = express();
    app.use(express.json());
    app.use(cors());

    //Endpoint / [GET] - home
    app.get("/", function (req, res) {
        res.send("Welcome to the backend!");
    });

    //Endpoint /itens [GET] - list of itens
    app.get("/itens", async function (req, res) {
        const documents = await collection.find().toArray();
        res.send(documents);
    })

    //Endpoint /itens/id [GET] - one item
    app.get("/itens/:id", async function (req, res) {
        const id = req.params.id;
        const item = await collection.findOne({ _id: new ObjectId(id) })
        res.send(item);
    })

    //Endpoint /itens [POST] - create one
    app.post("/item", async function (req, res) {
        const item = req.body;
        await collection.insertOne(item);
        res.send(`${item} adicionado com sucesso!`)
    });

    //Endpoint /itens/id [PUT] -update one
    app.put("itens/:id", async function (req, res) {
        const id = req.params.id;
        const body = req.body;

        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: body }
        );
        res.send(body);
    })

    app.delete("/itens/:id", async function (req, res) {
        const id = req.params.id;
        const item = await collection.deleteOne({ _id: new ObjectId(id) });
        res.send("Item deletado com sucesso");
    })

    app.listen(3000)
}

main()