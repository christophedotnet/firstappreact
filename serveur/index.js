import express from "express"
import { App } from "./classes/app.js"
import cors from "cors"
//Un objet pour gérer les données
const dataService = new App()

//Notre objet express
const api = express()

//Utilisation d'un middleware json
api.use(express.json())

//ouvert à tous
api.use(cors({ origin: "*" }))


//Endpoint pour créer une annonce
api.post('/annonce', (req, res) => {
    const { titre, contenu, image } = req.body
    if (titre != undefined && contenu != undefined) {
        dataService.createAnnonce(titre, contenu, image)
        res.json({ message: "annonce ajouté", error: false })
    }
    else
        res.json({ message: "Merci d'envoyer au moins un titre et un contenu" })
})

//Endpoint pour récuperer la liste des annonces
api.get('/annonce', (req, res) => {
    res.json(dataService.annonces)
})

//Endpoint pour récupérer une annonce par id
api.get('/annonce/:id', (req, res) => {
    const annonce = dataService.findAnnonceById(req.params.id)
    if (annonce != undefined)
        res.json(annonce)
    else
        res.json({ mesage: "aucune annonce avec cet id" })
})


api.listen(80, () => {
    dataService.read()
    console.log("port : 80 ")
    console.log("get /annonce => toutes les annonces ")
    console.log("post /annonce => ajouter une annonces ")
    console.log("get /annonce/id => annonce correspondant à l'id ")
})