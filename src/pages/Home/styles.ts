import styled from 'styled-components'
import { theme } from '../../theme'

export const StyledHome = styled.main`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    background-color: ${theme.colors.background};
    overflow-y: scroll;

    section {
        position: relative;
    }
`