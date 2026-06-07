import { useEffect, useState } from "react"
import { Container, Background, CloseButton } from "./styles"
import { getVideoMovie } from "../../services/getData"


function Modal({ movieId, setShowModal }) {
    const [videoMovie, setVideoMovie] = useState()

    useEffect(() => {
        async function getVideoMovies() {
            setVideoMovie(await getVideoMovie(movieId))
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