import { Annonce } from "./annonce.js"
import { writeFileSync, readFileSync } from "fs"
export class App {
    constructor() {
        this.annonces = []
        this.count = 0
        this.fichier = "data.json"
    }

    read() {
        const contenu = readFileSync(this.fichier).toString()
        this.annonces = JSON.parse(contenu)
        this.count = (this.annonces[this.annonces.length - 1] != undefined) ? this.annonces[this.annonces.length - 1].id : 0
    }

    write() {
        writeFileSync(this.fichier, JSON.stringify(this.annonces))
    }

    //Méthode de création
    createAnnonce(titre, contenu, image) {
        const annonce = new Annonce(++this.count, titre, contenu, image)
        this.annonces.push(annonce)
        this.write()
    }

    //Méthode pour récupérer une annonce par id
    findAnnonceById(id) {
        return this.annonces.find(t => t.id == id)
    }


}