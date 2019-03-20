import styled from 'styled-components';

export const Backdrop = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
`;

export const CenterStage = styled.div`
    width: 99.8%;
    height: 500px;
    margin-top: 60px;
    position: absolute;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid blue;
`;

export const Spotlight = styled.div`
    width: 99.8%;
    height: 99.8%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const NotButton = styled.button`
    margin:  0 0.625em 0;
    background-color: none;
    focus: none;
    color: #7a93c0;
    font-family: 'Orbitron', sans-sarif;
    font-size: 0.80em;
    font-weight: 500;
    letter-spacing: 0.0625em;
    border: none;
`;

export const ButtonBox = styled.div`
    width: 22%;
    height: 99.8%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // border: 1px solid gray;
`;

export const ButtonCage = styled.div`
    width: 90.2px;
    height: 57.2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #000;
`;

export const IsButton = styled.button`
    width: 80px;
    height: 47px;
    padding: 9.8px;
    display: flex;
    justify-content: center;
    align-items: center;
    focus: none;
    color: #000;
    font-family: 'Orbitron', sans-sarif;
    font-size: 0.80em;
    font-weight: 500;
    letter-spacing: 0.0625em;
    background-color: #c1d6fc;
    :hover {
        background-color: #b0c7f1;
    }
`;

export const Text = styled.div`
    width: auto;
    height: auto;
    padding:  0.625em;
    font-family: 'Orbitron', sans-sarif;
    letter-spacing: 0.0625em;
    h1 {
        color: #7a93c0;
        font-size: 2.50em;
        font-weight: 900;
    }
    h2 {
        padding-top: 8px;
        color: #7a93c0;
        font-size: 1.90em;
        font-weight: 700;
    }
    h3 {
        margin-bottom: 8px;
        color: #7a93c0;
        font-size: 1.20em;
        font-weight: 700;
    }
    p {
        margin: 0.60em 0;
        color: #000;
        font-size: 0.80em;
        font-weight: 500;
    }
`;

export const TextBlock = styled.div`
    width: 90%;
    height: auto;
    margin: 6px 6px 6px 10px;
    display: flex;
    justify-content: space-between;
    // border: 1px solid blue;
`;