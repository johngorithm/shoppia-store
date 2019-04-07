import styled from 'styled-components';

const CountManager = styled.div`
  margin: 10px;
  div {
    display: inline-block;
    border: 1px solid black;
    line-height: 30px;
    width: 32px;
    border-radius: 50%;
    font-size: 1.1rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .counter {
    border-radius: 0.2rem;
  }
  .increment, .decrement {
    cursor: pointer;
  }
`;

export default CountManager;