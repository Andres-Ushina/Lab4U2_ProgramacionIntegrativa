const API_URL= import.meta.env.VITE_API_URL;

export const obtenerPersonajes = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`Error al cargar personajes: ${response.status}`);
    }

    const data = await response.json();
    return data.results ?? [];
};
