export const obtenerPersonajes = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
        throw new Error(`Error al cargar personajes: ${response.status}`);
    }

    const data = await response.json();
    return data.results ?? [];
};
