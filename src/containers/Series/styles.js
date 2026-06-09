import styled from 'styled-components'

export const Background = styled.div`
    background-image: url(${(props) => props.$img});
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 1024px) {
        padding-top: 100px;
        padding-bottom: 50px;
    }

    @media (max-width: 768px) {
        padding-top: 120px;
        padding-bottom: 40px;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1500px;
    position: relative;
    z-index: 2;
    gap: 50px;
    padding: 0 20px;

    @media (max-width: 1024px) {
        gap: 30px;
    }

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        text-align: center;
        gap: 25px;
    }
`

export const Info = styled.div`
    width: 50%;

    h1 {
        font-size: clamp(2rem, 6vw, 5rem);
        font-weight: 700;
        color: #fff;
        line-height: 1.1;
    }

    p {
        font-size: clamp(1rem, 2vw, 1.25rem);
        font-weight: 500;
        color: #fff;
        margin-top: 20px;
        line-height: 1.6;
    }

    @media (max-width: 1024px) {
        width: 55%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 100%;

        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 0.95rem;
            margin-top: 15px;
        }
    }
`

export const Poster = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        max-width: 400px;
        border-radius: 30px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 1024px) {
        img {
            max-width: 320px;
        }
    }

    @media (max-width: 768px) {
        img {
            max-width: 280px;
        }
    }

    @media (max-width: 480px) {
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

    @media (max-width: 768px) {
        justify-content: center;
        flex-wrap: wrap;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        width: 100%;

        button {
            width: 100%;
            max-width: 300px;
        }
    }
`