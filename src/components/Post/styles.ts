import styled from 'styled-components'
import { theme } from '../../theme'

export const StyledPost = styled.div`
    display: flex;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.secondary};
    padding: 1rem;
    border-radius: .5rem;
    box-shadow: ${theme.shadows.sm};
    margin-top: 1rem;

    :first-child {
        margin-top: 0;
    }

    .post__image {
        width: 4rem;
        height: 4rem;
        border-radius: 4rem;
        background-color: ${theme.colors.secondary};
        margin-right: 1rem;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .post__wrapper {
        flex-grow: 1;
    }

    .post__owner {
        display: inline;
        font-weight: bolder;
        font-size: ${theme.fonts.lg};
    }

    .post__course {
        margin-left: .5rem;
        font-size: ${theme.fonts.xs};
    }

    .post__content {
        margin-top: .5rem;
        font-size: ${theme.fonts.base};
    }
`