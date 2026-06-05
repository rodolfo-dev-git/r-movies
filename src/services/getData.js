import api from "./api"

export async function getMovies() {
    const {
        data: { results }
    } = await api.get('/movie/popular')

    const randomIndex = Math.floor(Math.random() * 10)

    return results[randomIndex]
}

export async function getTopMovies(){
    const {
        data: { results }

    } = await api.get('/movie/top_rated')

    return results
}

export async function getTopSeries(){
    const {
        data: { results }

    } = await api.get('/tv/top_rated')

    return results
}


export async function getPopularSeries(){
    const {
        data: { results }

    } = await api.get('/tv/popular')

    return results
}


export async function getTopPeople(){
    const {
        data: { results }

    } = await api.get('/person/popular')

    return results
}

export async function getVideoMovie(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/videos`)

    return results[0]
}