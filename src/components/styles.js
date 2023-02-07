import styled, { keyframes } from "styled-components";

const rmv = keyframes`
  80% {
    background-position: left;
    opacity: 1;
  }
  100% {
    background-position: left;
    opacity: 0;
  }
`;
export const Apologize = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 2rem;
  opacity: 1;
  animation: ${rmv} 5s linear forwards;
  background-size: 200% 100%;
  background-position: right;
  background-image: linear-gradient(
    to right,
    #00030f 0%,
    #00030f 50%,
    #252936 50%,
    #252936 100%
  );
  code {
    font-size: 1.5em;
  }
`;

export const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .CanvasContainer {
    width: 100%;
    height: 100%;
    background: #00030f;
    border-bottom: thin solid #fff3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    scroll-snap-align: start;
    user-select: none;
    -webkit-user-drag: none;

    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }

    .right {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 2rem;
      overflow: hidden;
      padding: 2rem 1rem;

      @media (max-width: 1023px) {
        padding: 1rem;
      }

      .navigator {
        position: absolute;
        bottom: 2rem;
        right: 3.5rem;
        width: 1rem;
        z-index: 11;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .arrow {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-top: 2px solid #fff;
          border-left: 2px solid #fff;
          filter: drop-shadow(0 0 2px #fff7);
          transition: 150ms ease-out;
          &.top {
            transform: rotate(45deg) scale(1);
            &:hover {
              transform: rotate(45deg) scale(1.5);
              border-color: orange;
            }
          }
          &.bottom {
            transform: rotate(-135deg) scale(1);
            &:hover {
              transform: rotate(-135deg) scale(1.5);
              border-color: orange;
            }
          }
        }
      }

      input[type="search"] {
        background: #00030f;
        outline: none;
        border: thin solid #fff7;
        color: #fff;
        padding: 0.75rem 1rem;
        margin: 0 1rem;
        font-size: 1.5em;
        width: calc(100% - 2rem);
        border-radius: 0.25rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
        transition: 150ms linear;
        filter: drop-shadow(0 0 0 #fff7);

        @media (max-width: 1023px) {
          font-size: 1em;
          height: 3rem;
        }

        &::placeholder {
          color: #fffb;
        }
        &:hover {
          border: thin solid #fff;
        }
        &:focus {
          filter: drop-shadow(0 0 4px #fff7);
        }
      }

      .regionContainer {
        position: relative;
        width: 100%;
        height: 60%;

        @media (max-width: 1023px) {
          height: calc(100% - 4rem);
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 2rem;
          width: calc(100% - 10px);
          background: linear-gradient(#00030f, #0000);
          z-index: 10;
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2rem;
          width: calc(100% - 10px);
          background: linear-gradient(#0000, #00030f);
          z-index: 10;
        }

        .RegionNames {
          position: relative;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: visible;
          padding: 2rem 1rem;
          color: #fff;
          scroll-behavior: smooth;

          #topOfList {
            position: absolute;
            top: 0;
            left: 0;
          }

          p {
            position: relative;
            font-size: 2.5em;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
            transition: 50ms linear;
            cursor: pointer;

            @media (max-width: 1023px) {
              font-size: 1.5em;
            }

            span {
              border-bottom: thin solid #fff;
              transition: 50ms linear;
            }

            &:hover {
              color: orange;
              filter: drop-shadow(0 0 4px #f8a4003f);
              span {
                border-bottom: thin solid orange;
                filter: drop-shadow(0 0 4px #f8a4003f);
              }
            }
          }

          &::-webkit-scrollbar-thumb {
            border-radius: 999px;
            background-color: #fff7;
            &:hover {
              background-color: #fff;
            }
          }
          &::-webkit-scrollbar {
            width: 10px;
            background-color: #0000;
          }
        }
      }
    }
  }
`;

export const ControlCenter = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  height: 2rem;
  border-radius: 9999px;
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  background: #fff;

  svg {
    width: 1rem;
    height: 1rem;
  }

  input,
  svg {
    cursor: pointer;
  }

  @media (max-width: 1023px) {
    bottom: unset;
    left: unset;
    top: calc(50% - 4rem);
    right: 2rem;
  }
`;
