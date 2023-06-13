import { styled } from "styled-components";

export const SearchWrapper = styled.div`
  padding: 7px 10px;
  height: 50px;
  background: white;
  position: relative;

  .search-icon {
    opacity: 1;
    transition-delay: 0.3s;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.8s ease;
  }

  .search__back-btn {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.8s ease;
    opacity: 0;
    transition-delay: 0.3s;
    color: #00a884;
  }

  &:focus-within {
    .search-icon {
      opacity: 0;
      transition-delay: 0s;
    }

    .search__back-btn {
      transform: rotate(360deg);
      opacity: 1;
      transition-delay: 0s;
    }
  }
`;

export const IconContainer = styled.div`
  color: #919191;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  overflow: hidden;
`;

export const Input = styled.input`
  background: rgb(237, 237, 237);
  color: #3b4a54;
  padding-left: 60px;
  border-radius: 10px;
  width: 100%;
  height: 100%;

  &::placeholder {
    color: #3d4a54;
  }

  &:focus {
    outline: none;
  }
`;