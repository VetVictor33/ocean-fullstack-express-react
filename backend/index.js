const express = require("express");

const { MongoClient, ObjectId } = require("mongodb");

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

    app.get("/", function (req, res) {
        res.send("Welcome to the backend!");
    });

    app.get("/itens", async function (req, res) {
        const documents = await collection.find().toArray();
        res.send(documents);
    })

    app.listen(3000)
}

main()