import { Component } from "react";
import { AnnonceMenu } from "./annonce-menu";
import { AnnonceRouter } from "./annonce-router";
import { BrowserRouter } from 'react-router-dom';
import { findAnnonceById, getAnnonces } from "../services/annonces.service";


export class AppAnnonce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoris: [],
            recherche: undefined
        }
    }

    danslesfavoris = (id) => {
        if (this.state.favoris.find(f => f.id == id) != undefined) {
            return true
        } else {
            return false
        }
    }

    addtofavoris = (id) => {
        let AnnonceSelect = undefined
        findAnnonceById(id).then((res) => {
            AnnonceSelect = res.data
            if (this.danslesfavoris(id) === false) {
                this.setState({ favoris: [...this.state.favoris, { ...AnnonceSelect }] })
            } else {
                const tmpFavoris = this.state.favoris.filter(f => f.id != id)
                this.setState({ favoris: [...tmpFavoris] });
            }
        })
    }

    rechercheannonce = (titre) => {
        if(titre != ""){
            getAnnonces().then((res) => {
                let tmpAllAnnoncesRecherche = res.data.filter(t => t.titre.includes(titre))
                this.setState({ recherche: tmpAllAnnoncesRecherche })
            })
        }else {
            this.setState({ recherche: undefined })
        }
        
        
    }

    render() {
        return (
            <BrowserRouter >
                <AnnonceMenu nbfavoris={this.state.favoris.length} rechercheannonce={this.rechercheannonce} />
                <AnnonceRouter addtofavoris={this.addtofavoris} danslesfavoris={this.danslesfavoris} favoris={this.state.favoris} recherche={this.state.recherche} rechercheannonce={this.rechercheannonce}/>
            </BrowserRouter>
        );
    }
}

