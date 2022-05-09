import { Link } from "react-router-dom"
import { Component } from "react";


export class Annonce extends Component {



    render() {
        const { id, titre, contenu, image } = this.props.annonce
        return (
            <div class="col-sm-3">
            <div className="card mb-3" >
                <img className="card-img-top" src={image[0]} alt="imageannonce"></img>
                <div className="card-body">
                <h1 class="card-title">{titre}</h1>
                <p class="card-text">{contenu.substring(0,20)}</p>
                <Link className="btn btn-primary" to={"/annonce/" + id}>Details</Link>
                </div>
            </div>
            </div>
        );
    }
}
