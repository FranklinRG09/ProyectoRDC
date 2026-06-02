import {
    saveClients
}
from "../storage/localStorage.js"

export function editClient(
    clientes,
    id,
    data
){

    try{

        const actualizados =
            clientes.map(cliente => {

                if(cliente.id === id){

                    return {
                        ...cliente,
                        ...data
                    }
                }

                return cliente
            })

        saveClients(actualizados)

        return actualizados

    }catch(error){

        console.error(
            "Error editando cliente",
            error
        )

        return clientes
    }
}