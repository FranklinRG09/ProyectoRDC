export function searchClients(
    clientes,
    text
){

    try{

        return clientes.filter(cliente =>

            cliente.nombre
                .toLowerCase()
                .includes(
                    text.toLowerCase()
                ) ||

            cliente.correo
                .toLowerCase()
                .includes(
                    text.toLowerCase()
                ) ||

            cliente.contacto
                .toLowerCase()
                .includes(
                    text.toLowerCase()
                )
        )

    }catch(error){

        console.error(
            "Error buscando clientes",
            error
        )

        return clientes
    }
}