const API_KEY = "cddfda2a47c35657bae848679dd35c80";
const BASE_URL = "https://api.themoviedb.org/3"
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results
}
export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            console.error("API Error:", response.status, response.statusText);
            return [];
        }
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Network Error:", error);
        return [];
    }
}