import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'Poppins';
        src: url(../fonts/Poppins-Thin.ttf) format("truetype");
        font-style: normal;
        font-weight: 100;
    }

    @font-face {
        font-family: 'Poppins';
        src: url(../fonts/Poppins-ExtraLight.ttf);
        font-weight: 200;
    }

    @font-face {
        font-family: 'Poppins';
        src: url(../fonts/Poppins-Light.ttf);
        font-weight: 300;
    }

    @font-face {
        font-family: 'Poppins';
        src: url(../fonts/Poppins-Regular.ttf);
    }

    @font-face {
        font-family: 'Poppins';
        src: url(../fonts/Poppins-Medium.ttf);
        font-weight: 500;
    }

    @font-face {
        font-family: 'Poppins';
        src: url(../fonts/Poppins-SemiBold.ttf);
        font-weight: 600;
    }

    @font-face {
        font-family: 'Poppins';
        src: url(../fonts/Poppins-Bold.ttf);
        font-weight: 700;
    }

    @font-face {
        font-family: 'Poppins';
        src: url(../fonts/Poppins-ExtraBold.ttf);
        font-weight: 800;
    }

    @font-face {
        font-family: 'Poppins';
        src: url(../fonts/Poppins-Black.ttf);
        font-weight: 900;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    #root {
        min-height: 100vh;
    }

    body {
        ${({ theme }) => css `
            background: ${theme.colors.background.primary};
            font-family: ${theme.font.family.default};
        `}
    }
`

export const ScreenDisplay = styled.main `
    min-height: 100vh;
    margin-left: 300px;
    padding: 20px 40px;
`

export const CardDisplay = styled.div `
    display: flex;
    justify-content: ${({ startOn }) => startOn};
    gap: ${({ gap }) => gap + 'px'};
    margin-block: ${({ margin }) => margin + 'px'};
`