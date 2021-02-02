import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1em;
    width: 100vw;
    height: 100vh;
    background-color: #016EC4;
    overflow-y: scroll;
`;

export const Title = styled.h1`
    color: white;
    text-align: center;
    line-height: 1.5em;
    font-size: 1.2em;
    font-weight: 500;
    margin-top: 1em;
    margin-bottom: 2em;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 19em;
    padding-top: 2em;
    align-items: center;
`;

export const AppIcon = styled.img`
    height: 4.5em;
    border-radius: 0.8em;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3em;
    margin-top: 1.5em;
`;

export const Image = styled.img`
    height: 3em;
`;

// Question Box

export const Box = styled.div`
    flex-direction: column;
    background-color: rgba(0,0,0,0.4);
    border-radius: 0.8em;
    padding: 0.5em 1.5em 1.5em 1.5em;
    margin-bottom: 1.5em;
    width: 100%;
`;

export const BoxTitle = styled.h3`
    font-size: 1.1em;
    font-weight: 500;
    color: #FFF;
    text-align: center;
`;

export const BoxText = styled.p`
    color: #FFF;
    font-size: 0.8em;
    line-height: 1.5em;
    padding: 1em;
`;

export const InputLine = styled.input`
    background-color: #FFF;
    border-radius: 1.5em;
    border: 0;
    padding: 1em;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 0.8em;
    line-height: 1.4em;
    width: 100%;
    height: 2.8em;
    overflow: hidden;
    margin-bottom: 1em;
`;

export const Button = styled.button`
    width: 100%;
    height: 2.5em;
    background-color: #BED4FD;
    color: #000;
    font-size: 0.9em;
    text-align: center;
    border-radius: 1.5em;
    font-weight: 500;
    border: 0;
    outline: none;

    &:hover {
        background-color: #FFF;
        color: #000;
    }
`;