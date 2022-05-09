import { Component } from "react";
import { Link } from "react-router-dom";
import { RechercheAnnonce } from "./annonce-search-button";


export class AnnonceMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    resetRecherche = () => {
        this.props.rechercheannonce("")
    }

    render() {
        return (
            <header >
                <div className="container-fluid mb-3">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="nav-link" to="/" onClick={this.resetRecherche}>Acceuil</Link>
                        <Link className="nav-link" to="/formulaire">Ajouter une annonce</Link>
                        {
                            this.props.nbfavoris > 0 ?
                                (<Link className="nav-link" to="/favoris" onClick={this.resetRecherche}>Mes favoris ({this.props.nbfavoris})</Link>) : ("")
                        }
                        <RechercheAnnonce rechercheannonce={this.props.rechercheannonce}></RechercheAnnonce>
                    </nav>
                </div>
            </header>
        );
    }
}

