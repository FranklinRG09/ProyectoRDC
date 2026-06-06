export function getLocation(){

    const ubicacion =
        document.getElementById(
            "ubicacion"
        )

    if(!navigator.geolocation){

        ubicacion.textContent =
            "Geolocalización no soportada"

        return
    }

    navigator.geolocation.getCurrentPosition(

        position => {

            ubicacion.innerHTML = `

                <strong>Latitud:</strong>
                ${position.coords.latitude}

                <br>

                <strong>Longitud:</strong>
                ${position.coords.longitude}
            `
        },

        error => {

            ubicacion.textContent =
                "No se pudo obtener ubicación"
        }
    )
}