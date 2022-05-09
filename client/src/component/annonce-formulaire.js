import { Component } from "react";
import { addAnnonces } from "../services/annonces.service";
import { withTools } from "../tools/with-tools";


 class AnnonceFormulaire extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newannonce :{
                titre : undefined,
                contenu : undefined,
                image :[]
            }
         }
    }

    fieldsOnChange = (e) => {
        const tmpAnnonce = this.state.newannonce
        tmpAnnonce[e.target.getAttribute("name")] = e.target.value
        this.setState({ newannonce: {...tmpAnnonce}  });
    }

    addToImage = (e) => {
        const tmpTabImage = this.state.newannonce.image
        tmpTabImage[e.target.getAttribute("name")] = e.target.value
        this.setState({ newannonce : {image : [...tmpTabImage] } });
    }

    addannonce = (e) => {
        e.preventDefault()
        addAnnonces(this.state.newannonce).then(res => {
           this.props.navigate("/")
        })
       
    
    }
    
    render() { 
        return ( 
           <div className="container">
             <h2>Formulaire d'ajout annonce</h2> 
             <form onSubmit={this.addannonce}>
                <div className="input-goup mb-3">
                    <input type="text" className="form-control" name="titre" onChange={this.fieldsOnChange}  placeholder="titre de l'annonce" />
                </div>
                <div className="input-goup mb-3">
                    <textarea className="form-control" name="contenu" onChange={this.fieldsOnChange} placeholder="contenu de l'annonce" ></textarea>
                </div>
                <div className="input-goup mb-3">
                    <input className="form-control" type="url" name="0" onChange={this.addToImage}  placeholder="url de l'image" />
                </div>
                <div className="input-goup mb-3">
                    <input className="form-control" type="url" name="1" onChange={this.addToImage}  placeholder="url de l'image" />
                </div>
                <div className="input-goup mb-3">
                    <input  className="form-control" type="url" name="2" onChange={this.addToImage}  placeholder="url de l'image" />
                </div>
                <div >
                    <button className="btn btn-warning" type="submit">Valider</button>
                </div>
            </form>
           </div>
         );
    }
}

export default withTools(AnnonceFormulaire)
 
