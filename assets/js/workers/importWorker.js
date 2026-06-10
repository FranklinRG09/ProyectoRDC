self.onmessage = function (e) {

    try {

        const clientes = JSON.parse(e.data);

        if (!Array.isArray(clientes)) {
            throw new Error("El JSON debe ser un array");
        }

        const procesados = [];

        clientes.forEach((cliente, index) => {

            procesados.push({
                id: Date.now() + index,
                nombre: cliente.nombre || "",
                correo: cliente.correo || "",
                contacto: cliente.contacto || "",
                estado: cliente.estado || "Activo"
            });

            const progreso = Math.round(
                ((index + 1) / clientes.length) * 100
            );

            self.postMessage({
                type: "progress",
                progress: progreso
            });
        });

        self.postMessage({
            type: "complete",
            data: procesados
        });

    } catch (error) {

        self.postMessage({
            type: "error",
            message: error.message
        });
    }
};