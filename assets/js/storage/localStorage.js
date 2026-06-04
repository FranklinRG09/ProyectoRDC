const STORAGE_KEY = "clientes";

/* ===================================== */
/* GET CLIENTS */
/* ===================================== */

export function getClients(){

    try{

        const data =
            localStorage.getItem(
                STORAGE_KEY
            );

        /* EMPTY */

        if(!data){

            return [];
        }

        const parsed =
            JSON.parse(data);

        /* VALIDATE ARRAY */

        if(
            !Array.isArray(parsed)
        ){

            return [];
        }

        return parsed;
    }
    catch(error){

        console.error(
            "Error obteniendo clientes:",
            error
        );

        return [];
    }
}

/* ===================================== */
/* SAVE CLIENTS */
/* ===================================== */

export function saveClients(
    clientes
){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(
            clientes
        )
    );
}

/* ===================================== */
/* CLEAR CLIENTS */
/* ===================================== */

export function clearClients(){

    localStorage.removeItem(
        STORAGE_KEY
    );
}