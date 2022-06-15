import styled from "styled-components"
import { theme } from "../../theme"

export const StyledMenu = styled.aside`
  width: 35vw;
  max-width: 320px;
  height: 100vh;
  padding: 2rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  position: fixed;

  h1 {
    font-weight: bolder;
    font-size: ${theme.fonts.xl}
  }

  section {
    margin-top: 2rem;
  }

  p {
    margin-top: 1rem;
    font-size: ${theme.fonts.lg}
  }
`
