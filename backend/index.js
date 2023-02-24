const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const DB_URL = "mongodb+srv://admin:YnGK2ixOqEdBJy8Q@cluster0.vgwirza.mongodb.net";
const DB_NAME = "ocean-fullstack-09-02-2023";

async function main() {
    console.log("Trying to connect to database...")
    const client = await MongoClient.connect(DB_URL);
    const db = client.db(DB_NAME);
    const collection = db.collection("personagens");
    console.log("Successfully connected!")

    const app = express();
    app.use(express.json());
    app.use(cors());

    const getCharById = async id => {
        try {
            return collection.findOne({ _id: new ObjectId(id) });
        } catch (error) { }
    }

    //Endpoint / [GET] - home
    app.get("/", function (req, res) {
        res.send({ message: "Hello World!" });
    });

    //Endpoint /itens [GET] - list of itens
    app.get("/personagens", async function (req, res) {
        const listaPersonagens = await collection.find().toArray();
        res.send(listaPersonagens);
    })

    //Endpoint /itens/id [GET] - one item
    app.get("/personagem/:id", async function (req, res) {
        const id = req.params.id;
        const personagem = await getCharById(id)
        res.send(personagem);
    })

    //Endpoint /itens [POST] - create one
    app.post("/personagem", async function (req, res) {
        const personagem = req.body;
        if (!personagem || !personagem.nome || !personagem.imagemUrl || !personagem.tags) {

            res.status(400).send({ message: 'Personagem inválido! Verifique se há nome, URL da imagem e lista de tags' })

            return
        }

        const { insertCount } = await collection.insertOne(personagem);
        /*
        if (insertCount !== 1) {
            res.status(500).send({ message: 'Erro ao criar o personagem.' })
            return
        }*/

        res.status(201).send(personagem);
    });

    //Endpoint /itens/id [PUT] -update one
    app.put("/personagem/:id", async function (req, res) {
        const id = req.params.id;
        const personagem = req.body;

        if (!personagem) {
            res.status(400).send({ message: 'Personagem inválido! Preencha ao menos uma informação' })
            return
        }

        const quantidadePersonagens = await collection.countDocuments({ _id: new ObjectId(id) });

        if (quantidadePersonagens !== 1) {
            res.status(404).send({ message: 'Persoagem não encontrado!' });
            return
        }

        const { result } = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: personagem }
        );

        if (!result.acknowledged) {
            res.status(500).send({ message: "Ocorreu um erro ao atualizar o personagem" })
            return
        }

        res.send(await getCharById(id));
    })

    //Endpoint /itens/id [DELETE] -delete one
    app.delete("/personagem/:id", async function (req, res) {
        const id = req.params.id;
        if (id.length !== 24) {
            res.status(400).send({ message: 'O id deve ser um string de 24 caracteres' })
            return
        }

        const quantidadePersonagens = await collection.countDocuments({ _id: new ObjectId(id) });

        if (quantidadePersonagens !== 1) {
            res.status(404).send({ message: 'Personagem não encontrado' });
            return
        }

        const { deletedCount } = await collection.deleteOne({ _id: new ObjectId(id) });

        if (deletedCount !== 1) {
            res.status(500).send({ message: 'Ocorreu um erro ao deletar o personagem' });
            return
        }

        res.sendStatus(204);
    })

    app.all("*", function (req, res) {
        res.status(404).send({
            message: "Endpoint wasn't found.",
        });
    });

    app.use((error, req, res, next) => {
        res.status(error.status || 500).send({
            error: {
                status: error.status || 500,
                message: error.message || "Internal Server Error",
            },
        });
    });

    const port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log(`Servidor rodando na porta ${port}`);
    })
}

main()