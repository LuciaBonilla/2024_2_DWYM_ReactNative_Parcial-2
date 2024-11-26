export class BackendCaller {
    /**
     * Identificador de la API.
     */
    static #API_URI = 'http://161.35.143.238:8000/lbonilla';

    static async getAllDestinations() {
        try {
            const response = await fetch(this.#API_URI,
                {
                    method: "GET",
                }
            );
            
            const statusCode = response.status;

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();

            return { statusCode, data };
        } catch (error) {
            console.error("Error:", error);
        }
    }

    static async getDestinationByID(destinationID) {
        try {
            const response = await fetch(this.#API_URI + `/${destinationID}`,
                {
                    method: "GET",
                }
            );

            const statusCode = response.status;

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();

            return { statusCode, data };
        } catch (error) {
            console.error("Error:", error);
        }
    }

    static async postDestination(name, description, difficulty, favourite) {
        try {
            const response = await fetch(this.#API_URI,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            name: name,
                            description: description,
                            difficulty: difficulty,
                            favourite: favourite
                        }
                    )
                }
            );

            const statusCode = response.status;

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();

            return { statusCode, data };
        } catch (error) {
            console.error("Error:", error);
        }
    }

    static async deleteDestination(destinationID) {
        try {
            const response = await fetch(this.#API_URI + `/${destinationID}`,
                {
                    method: "DELETE",
                }
            );

            const statusCode = response.status;

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();

            return { statusCode, data };
        } catch (error) {
            console.error("Error:", error);
        }
    }

    static async putDestination(destinationID, name, description, difficulty, favourite) {
        try {
            const response = await fetch(this.#API_URI + `/${destinationID}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            name: name,
                            description: description,
                            difficulty: difficulty,
                            favourite: favourite
                        }
                    )
                }
            );

            const statusCode = response.status;

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();

            return { statusCode, data };
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

export default BackendCaller;