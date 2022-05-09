import { Component } from "react";
import { Link } from "react-router-dom";
import { findAnnonceById } from "../services/annonces.service";
import { withTools } from './../tools/with-tools';
import  AnnonceButtonFavoris  from "./annonce-button-favoris";


class AnnonceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Annonce: {}
        }
    }
    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        const id = parseInt(this.props.params.id)
        findAnnonceById(id).then((res) => {
            this.setState({ Annonce: { ...res.data } })
        })
    }

    
    resetRecherche = () => {
        this.props.rechercheannonce("")
    }

    render() {

        const { titre, contenu, image } = this.state.Annonce
        return (
            <div className="container">
                {titre === undefined ?
                    (
                        <h3>Pas d'annonce correspondante </h3>
                    )
                    :
                    (
                        <div className="mb-3">
                            <h1 className="mb-3">{titre}</h1>
                            <p className="mb-3">{contenu}</p>
                            {image.map((a, i) => (<img className="img-fluid mb-3" src={a} key={i} alt={i}></img>))}
                            <AnnonceButtonFavoris favoris="false" addtofavoris={this.props.addtofavoris} danslesfavoris={this.props.danslesfavoris}></AnnonceButtonFavoris>
                            <Link className="btn btn-warning mb-3" to="/" onClick={this.resetRecherche}>Acceuil</Link>
                        </div>
                    )
                }

            </div>
        );

    }
}

export default withTools(AnnonceDetails)
