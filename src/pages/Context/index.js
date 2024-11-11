import { createContext } from "react";

// Criando o context e colocando um valor inicial padrão 
const Context = createContext({
    token: '',
    setToken: () => {},
    idUser: '',
    setIdUser: () => {},
})

export default Context;