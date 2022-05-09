import { Component } from "react";
import { withTools } from "../tools/with-tools";


export class AnnonceButtonFavoris extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
         }
    }
    addtofavoris = (e) => {
        e.preventDefault()
            const id = this.props.params.id
            this.props.addtofavoris(id)
    }
    
    render() { 

        return ( 
            <form onSubmit={this.addtofavoris}>
        <button className="btn btn-info mb-3">
        {this.props.danslesfavoris(this.props.params.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        </button>
        </form>
         );
    }
}

export default withTools(AnnonceButtonFavoris)