import axios from "axios"



//Récuperer la liste des annonces
export const getAnnonces = () => {
    return axios.get("http://localhost/annonce")
}

//Récupérer une annonce par id
export const findAnnonceById =  (id) => {
    return axios.get("http://localhost/annonce/"+id)
}


//Créer une annonce
export const addAnnonces = (annonce) => {
    return axios.post("http://localhost/annonce", {...annonce})
   
}


