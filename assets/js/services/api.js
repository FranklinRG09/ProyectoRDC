export async function fetchUsers(){

    try{

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            )

        if(!response.ok){

            throw new Error(
                "Error API"
            )
        }

        return await response.json()

    }catch(error){

        console.error(
            "Error consumiendo API",
            error
        )

        return []
    }
}