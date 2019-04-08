import styled from 'styled-components';

const Title5 = styled.h5.attrs(({ margin, padding, color }) => ({
  margin: margin || 0,
  padding: padding || 0,
  color: color || "black"
}))`
  margin: ${ props => props.margin};
  padding: ${ props => props.padding};
  color: ${ props => props.color};
`;

export default Title5;