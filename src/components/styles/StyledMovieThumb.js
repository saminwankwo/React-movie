import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    /* min-height: 340px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 10px;
    animation: animateMovieThumb 0.5s;

    :hover {
      opacity: 0.8;
    }

    .clickable {
      cursor: pointer;
    }

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
