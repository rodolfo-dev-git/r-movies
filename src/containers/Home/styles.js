import styled from 'styled-components'

export const Background = styled.div`
    background-image: url(${(props) => props.$img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5)
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1500px;

    @media (max-width: 800px) {
        flex-direction: column-reverse;
    }
`

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1 {
        font-size: clamp(2rem, 6vw, 5rem);;
        font-weight: 700;
        color: #ffffff;
        line-height: 1.1;
    }

    p {
        font-size: clamp(1rem, 2vw, 1.25rem);
        font-weight: 500;
        color: #ffffff;
        margin-top: 30px;
        margin-bottom: 20px;
        line-height: 1.6;
    }

    @media (max-width: 800px) {
        width: 100%;
        text-align: center;
    }
`

export const Poster = styled.div`
    z-index: 2;

    img {
        width: 100%;
        max-width: 400px;
        border-radius: 30px;
    }


    @media (max-width: 800px) {
        margin-bottom: 20px;

        img {
            max-width: 300px;
        }
    }

    @media (max-width: 500px) {
        img {
            max-width: 220px;
            border-radius: 20px;
        }
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
`