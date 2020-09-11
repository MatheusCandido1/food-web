import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    background-color: #137613;
    width: 80px;
    flex-direction: column;
`;

export const Body = styled.div`
    display: flex;
    backgound-color: #00980d;
    background-image: url('/assets/bg.png');
    flex: 1;
    overflow-y: auto;
`;