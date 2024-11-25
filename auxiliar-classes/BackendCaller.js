export class BackendCaller {
    /**
     * Identificador de la API.
     */
    static #API_URI = 'http://10.13.170.46:8000/planets';

    static async getAllPlanets() {
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

    static async getPlanetByID(planetID) {
        try {
            const response = await fetch(this.#API_URI + `/${planetID}`,
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

    static async postPlanet(name, description, quantityMoons, moonNames, imageURL) {
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
                            moons: quantityMoons,
                            moon_names: moonNames,
                            image: imageURL
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

    static async deletePlanet(planetID) {
        try {
            const response = await fetch(this.#API_URI + `/${planetID}`,
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

    static async putPlanet(planetID, name, description, quantityMoons, moonNames, imageURL) {
        try {
            const response = await fetch(this.#API_URI + `/${planetID}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            name: name,
                            description: description,
                            moons: quantityMoons,
                            moon_names: moonNames,
                            image: imageURL
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