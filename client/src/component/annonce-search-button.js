import { Component } from "react";
export class RechercheAnnonce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search : ""
        }
    }
    
    fieldChange = (e) => {
        this.setState({search:e.target.value})
    }
    onSearch = (e) => {
        e.preventDefault()
      //  if (this.state.search !== "") {
            this.props.rechercheannonce(this.state.search)
      //  }
        
    }
    render() { 
        return ( 
            <form className="d-flex" onSubmit={this.onSearch}>
                <input className="form-control me-2" type="text" onChange={this.fieldChange} placeholder="Rechercher une annonce" />
                <button className="btn btn-primary" type="submit">Rechercher</button>
            </form>
         );
    }
}
