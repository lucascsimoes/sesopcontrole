import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 180px;
    padding: 20px;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    overflow: auto;
    ${({ theme, type }) => css `
        background: ${theme.colors.background.secondary};
        border-top: 5px solid ${
            type === 'Palestra Gravada' ? theme.colors.videos.palestra :
            type === 'Seminário' ? theme.colors.videos.seminario :
            type === 'Videoaula' ? theme.colors.videos.videoaula :
            theme.colors.mediumGray
        }
    `};

    &:hover:after {
        height: 100%;
        transition: .45s;
    }

    &:after {
        display: flex;
        align-items: center;
        justify-content: center;
        content: '${({ type }) => `Ver ${type}`}';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        transition: .45s;
        overflow: hidden;
        text-transform: uppercase;
        color: #ffffff50;
        font-weight: bold;
        ${({ theme, type }) => css `
        background: ${
            type === 'Palestra Gravada' ? theme.colors.videos.palestra :
            type === 'Seminário' ? theme.colors.videos.seminario :
            type === 'Videoaula' ? theme.colors.videos.videoaula :
            theme.colors.mediumGray
        }
    `};
    }
`

export const Infos = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    background: linear-gradient(to top, black, transparent);
    margin-top: auto;
    color: white;
    padding: 10px;

    h3 {
        margin-top: auto;
        font-weight: 500;
        letter-spacing: 1px;
    }

    p {
        font-size: 13px;
    }
`