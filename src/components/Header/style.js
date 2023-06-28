import styled, { css } from "styled-components";

export const Container = styled.header `
    position: relative;

    h1 {
        color: transparent;
        font-size: clamp(1.25rem, 0.3676rem + 4.7059vw, 6.25rem);
        font-weight: 900;
        line-height: 100%;
        ${({ theme }) => css `
            -webkit-text-stroke: 2px ${theme.colors.primary + 40};
        `}
    }

    h2 {
        font-size: clamp(1rem, 0.9118rem + 0.4706vw, 1.5rem);
    }
`