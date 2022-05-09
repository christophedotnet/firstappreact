import { Component } from "react";
import { getAnnonces } from "../services/annonces.service";
import { Annonce } from "./annonce";


export class AnnonceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Annonces: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }



    fetchData = () => {
        getAnnonces().then((res) => {
            this.setState({ Annonces: [...res.data] })
        })
    }

    annulleRecherche = (e) => {
        e.preventDefault()
        this.props.rechercheannonce("")
    }

    render() {
        if (this.props.recherche != undefined) {
            return (
                <div className="container">
                    <h2>Ma recherche</h2> 
                    {
                        this.props.recherche.length > 0 ?
                            (
                                
                                <div className="row">{this.props.recherche.map((a, i) => (<Annonce key={i} annonce={a}></Annonce>))}</div>
                             
                            )
                            : (
                                <div>Pas de résultat</div>
                             

                            )
                    }
                    <form onSubmit={this.annulleRecherche}>
                <button type="submit" className="btn btn-danger">Annuler Rechercher</button>
            </form>
                </div>
            )
        } else {


            return (
                <div className="container">
                    {
                        this.props.favoris === false ?
                            (
                                <div className="row">{this.state.Annonces.map((a, i) => (<Annonce key={i} annonce={a}></Annonce>))}</div>
                            )
                            : (
                                <div className="row">{this.props.mesfavoris.map((a, i) => (<Annonce key={i} annonce={a}></Annonce>))}</div>

                            )
                    }



                </div>
            );
        }
    }
}



