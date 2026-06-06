export function calculateMetrics(
    clientes
){

    try{

        const total =
            clientes.length

        const activos =
            clientes.filter(cliente =>
                cliente.estado === "Activo"
            ).length

        const inactivos =
            clientes.filter(cliente =>
                cliente.estado === "Inactivo"
            ).length

        return {

            total,
            activos,
            inactivos
        }

    }catch(error){

        console.error(
            "Error calculando métricas",
            error
        )

        return {

            total: 0,
            activos: 0,
            inactivos: 0
        }
    }
}