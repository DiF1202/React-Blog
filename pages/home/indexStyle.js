import styled from "styled-components";

export const HomeMainWrap = styled.div`
  margin-top: 60px;
  align-items: flex-start;

  .left-content {
    width: 57%;
    /* z-index:2; */
    min-height: 900px;
    border: 1px solid #f2ebeb;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    margin-right: 10px;
  }
  .right-bar {
    min-width: 200px;
    animation: ${(props) => (props.moveRight ? "move_right 0.6s ease-in" : "")};
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid #f2ebeb;
    box-shadow: 0 0 10px white;
    border-radius: 5px;
    width: 15%;
  }

  @keyframes move_right {
    0% {
      transform: translateX(110%);
    }
    50% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media not screen and (min-width: 60em) {
    .left-content {
      width: 70%;
    }
    .right-bar {
      width: 25%;
    }
  }
  @media not screen and (min-width: 50em) {
    .left-content {
      width: 100%;
      margin-right: 0px;
    }
    .right-bar {
      display: none;
    }
  }
  .list-title {
    font-size: 1.3rem;
    color: #1e90ff;
    padding: 0 0.5rem;
  }
  .list-context {
    color: #777;
    padding: 0.5rem;
  }
  .list-icon {
    padding: 0.5rem 0;
    color: #aaa;
  }
  .list-icon span {
    display: inline-block;
    padding: 0 10px;
  }
`;
// export const HomeMainWrap = styled.div`
//   body {
//     background-color: #f6f6f6;
//   }

//   .comm-left {
//     background-color: #fff;
//     padding: 0.3rem;
//     border-radius: 0.3rem;
//     border-bottom: 1px solid #eee;
//   }
//   .comm-right {
//     background-color: #fff;
//     margin-left: 0.5rem;
//     padding: 0.3rem;
//     border-radius: 0.3rem;
//     border-bottom: 1px solid #eee;
//   }
//   .comm-main {
//     margin-top: 0.5rem;
//   }
//   .list-title {
//     font-size: 1.3rem;
//     color: #1e90ff;
//     padding: 0 0.5rem;
//   }
//   .list-context {
//     color: #777;
//     padding: 0.5rem;
//   }
//   .list-icon {
//     padding: 0.5rem 0;
//     color: #aaa;
//   }
//   .list-icon span {
//     display: inline-block;
//     padding: 0 10px;
//   }
// `;
