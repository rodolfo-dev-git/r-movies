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
// ------------
export async function getVideoMovies(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/videos`)

    return results
}

export async function getMovieCredits(movieId) {
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`)

    return cast
}

export async function getMovieSimilar(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/similar`)

    return results
}

export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`)

    return data
}

export async function getGenres() {
    const { data } = await api.get('/genre/movie/list', {
        params: {
            language: 'pt-BR'
        }
    })

    return data.genres
}

// export async function getActionMovies() {
//     const {
//         data: { results }
//     } = await api.get('/discover/movie', {
//         params: {
//             with_genres: 28,
//             language: 'pt-BR'
//         }
//     })

//     return results
// }

export async function getMoviesByGenre(genreId) {
    const {
        data: { results }
    } = await api.get('/discover/movie', {
        params: {
            with_genres: genreId,
            language: 'pt-BR'
        }
    })

    return results
}