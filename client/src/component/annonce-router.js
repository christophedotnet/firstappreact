import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import  AnnonceDetails  from "./annonce-details";
import  AnnonceFormulaire  from "./annonce-formulaire";
import { AnnonceList } from "./annonce-list";


export class AnnonceRouter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
         }
    }
    
    render() { 
        return ( 
           <Routes>
               <Route path="/" element={<AnnonceList favoris={false} recherche={this.props.recherche} rechercheannonce={this.props.rechercheannonce}></AnnonceList>}></Route>
               <Route path="/formulaire" element={<AnnonceFormulaire></AnnonceFormulaire>}></Route>
               <Route path="/favoris" element={<AnnonceList favoris={true} mesfavoris={this.props.favoris} recherche={this.props.recherche} rechercheannonce={this.props.rechercheannonce}></AnnonceList>}></Route>
               <Route path="/annonce/:id" element={<AnnonceDetails addtofavoris={this.props.addtofavoris} danslesfavoris={this.props.danslesfavoris} rechercheannonce={this.props.rechercheannonce}></AnnonceDetails>}></Route>
           </Routes>
         );
    }
}
 
