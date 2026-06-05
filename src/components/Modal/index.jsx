import { useEffect, useState } from "react"
import { Container, Background, CloseButton } from "./styles"
import api from "../../services/api"


function Modal({ movieId, setShowModal }) {
    const [videoMovie, setVideoMovie] = useState()

    useEffect(() => {
        async function getVideoMovies() {
            const {
                data: { results }

            } = await api.get(`/movie/${movieId}/videos`)

            setVideoMovie(results[0])
        }
        getVideoMovies()
    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
            {videoMovie && (
                <Container>
                    <CloseButton onClick={() => setShowModal(false)}>
                        ✕
                    </CloseButton>
                    <iframe
                        src={`https://www.youtube.com/embed/${videoMovie.key}`}
                        title="Youtube Video Player"
                        height="500"
                        width="100%"
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal