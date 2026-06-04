export function renderClients(
    clientes
){

    const tabla =
        document.getElementById(
            "tablaClientes"
        );

    if(!tabla) return;

    /* EMPTY */

    tabla.innerHTML = "";

    /* NO DATA */

    if(clientes.length === 0){

        tabla.innerHTML = `

            <tr>

                <td colspan="5" class="text-center p-4">

                    No hay clientes registrados

                </td>

            </tr>

        `;

        return;
    }

    /* RENDER */

    clientes.forEach(cliente => {

        tabla.innerHTML += `

            <tr>

                <td>

                    ${cliente.nombre}

                </td>

                <td>

                    ${cliente.correo}

                </td>

                <td>

                    ${cliente.contacto}

                </td>

                <td>

                    <span class="badge ${
                        cliente.estado === "Activo"
                        ? "bg-success"
                        : "bg-danger"
                    }">

                        ${cliente.estado}

                    </span>

                </td>

                <td>

                    <div class="action-buttons">

                        <button
                            onclick="window.editClient(${cliente.id})"
                            class="btn-action btn-edit"
                        >

                            <i class="bi bi-pencil-fill"></i>

                        </button>

                        <button
                            onclick="window.deleteClient(${cliente.id})"
                            class="btn-action btn-delete"
                        >

                            <i class="bi bi-trash-fill"></i>

                        </button>

                    </div>

                </td>

            </tr>
        `;
    });
}