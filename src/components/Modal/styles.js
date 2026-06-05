import styled from 'styled-components'


export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 900;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    background-color: #000000;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 50px;
    max-width: 1200px;

    iframe {
        border: none;
    }

    @media (max-width: 768px) {
        width: 80vw;
        padding: 15px;

        iframe {
            height: 40vh;
        }
    }

    @media (max-width: 480px) {
        width: 95vw;
        padding: 10x;

        iframe {
            height: 40vh;
        }
    }
`

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;

    width: 32px;
    height: 32px;

    border: none;
    border-radius: 50%;

    background: red;
    color: white;
    font-size: 18px;
    font-weight: bold;

    cursor: pointer;
    z-index: 999;

    @media (max-width: 768px) {
        width: 28px;
        height: 28px;
        font-size: 16px;
    }
`