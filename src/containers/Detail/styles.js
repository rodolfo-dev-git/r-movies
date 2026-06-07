import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from {
        transform: scale(0)
    }
    to {
        transfrom: scale(1)
    }
`


export const Background = styled.div`
    background-image: url(${props => props.image});
    height: 50vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    @media (max-width: 768px) {
        height: 40vh;
    }

    @media (max-width: 480px) {
        height: 35vh;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5)
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 12vh;
        background-image: linear-gradient(to top, #070707, rgba(0, 0, 0, 0))
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 1500px;
    margin: -100px auto 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-top: -60px;
    }
`

export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 99;

img {
    width: 40vw;
    max-width: 450px;
    height: auto;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px;
    animation: ${scale} 0.5s linear;
}


@media (max-width: 768px) {
    justify-content: center;
    width: 100%;

    img {
        width: 60vw;
        max-width: 350px;
    }
}

@media (max-width: 480px) {
    img {
        width: 70vw;
        max-width: 280px;
        border-radius: 20px;
    }
}
`

export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 99;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2{
        color: #fff;
        font-size: 50px;
        font-weight: 700;
    }

    p {
        font-weight: 700;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 30px;
    }

        @media (max-width: 768px) {
        width: 90%;
        text-align: center;
        align-items: center;

        h2 {
            font-size: 36px;
        }

        p {
            font-size: 16px;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 28px;
        }

        p {
            font-size: 14px;
        }
    }
`

export const ContainerMovies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;

    div{
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        width: 100%;
        height: 100%;
        margin: 20px 0;
        margin-bottom: 10px;
    }

    h4{
        color: #fff;
        font-style: 20px;
        font-weight: 700;
    }

    iframe {
        border:none;

    }

    @media (max-width: 480px) {
        padding: 10px;

        h4 {
            font-size: 18px;
        }
    }

`
