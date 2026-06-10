import { clientesPage }
from "../pages/clientes.js"

import { estadisticasPage }
from "../pages/estadisticas.js"

import { configuracionPage }
from "../pages/configuracion.js"

import { ayudaPage }
from "../pages/ayuda.js"

export function loadPage(page){

    const app =
        document.getElementById("app")

    const title =
        document.getElementById("pageTitle")

    switch(page){

        case "clientes":

            title.textContent =
                "Clientes"

            app.innerHTML =
                clientesPage()

            break

        case "estadisticas":

            title.textContent =
                "Estadísticas"

            app.innerHTML =
                estadisticasPage()

            break

        case "configuracion":

            title.textContent =
                "Configuración"

            app.innerHTML =
                configuracionPage()

            break

        case "ayuda":

            title.textContent =
                "Ayuda"

            app.innerHTML =
                ayudaPage()

            break
    }
}