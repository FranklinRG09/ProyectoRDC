export function validateClient(
    nombre,
    correo,
    contacto
){

    /* REMOVE SPACES */

    nombre =
        nombre.trim();

    correo =
        correo.trim();

    contacto =
        contacto.trim();

    /* EMPTY FIELDS */

    if(
        !nombre ||
        !correo ||
        !contacto
    ){

        throw new Error(
            "Todos los campos son obligatorios"
        );
    }

    /* NAME LENGTH */

    if(nombre.length < 3){

        throw new Error(
            "El nombre debe tener mínimo 3 caracteres"
        );
    }

    if(nombre.length > 50){

        throw new Error(
            "El nombre no puede superar 50 caracteres"
        );
    }

    /* ONLY LETTERS */

    const nombreRegex =
        /^[a-zA-ZÀ-ÿ\s]+$/;

    if(
        !nombreRegex.test(nombre)
    ){

        throw new Error(
            "El nombre solo puede contener letras"
        );
    }

    /* EMAIL */

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(
        !emailRegex.test(correo)
    ){

        throw new Error(
            "Ingrese un correo válido"
        );
    }

    /* CONTACT */

    const contactoRegex =
        /^[0-9]{8,15}$/;

    if(
        !contactoRegex.test(contacto)
    ){

        throw new Error(
            "El contacto debe contener solo números entre 8 y 15 dígitos"
        );
    }

    return true;
}