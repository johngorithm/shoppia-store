import styled from 'styled-components';

const Title3 = styled.h3`
  color: ${props => props.color || "black"};
  size: ${props => props.size || "1.3rem"};
  margin: 0;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`;

export default Title3;