import {
    saveClients
}
from "../storage/localStorage.js"

export function deleteClient(
    clientes,
    id
){

    try{

        const nuevosClientes =
            clientes.filter(cliente =>
                cliente.id !== id
            )

        saveClients(nuevosClientes)

        return nuevosClientes

    }catch(error){

        console.error(
            "Error eliminando cliente",
            error
        )

        return clientes
    }
}