import {
    saveClients
}
from "../storage/localStorage.js"

export function createClient(
    clientes,
    cliente
){

    try{

        clientes.push(cliente)

        saveClients(clientes)

        saveLastClient(cliente)

        return clientes

    }catch(error){

        console.error(
            "Error creando cliente",
            error
        )

        return clientes
    }
}