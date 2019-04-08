import styled from 'styled-components';

const Button = styled.button.attrs(({ textColor, borderColor }) => ({
  color: textColor || "black",
  borderColor: borderColor || textColor
}))`
 border-radius: 3px;
 border: 1px solid ${props => props.borderColor};
 color: ${props => props.color};
 background: white;
 outline: 0;
 cursor: pointer;
 padding: 5px 10px;
 background: white;
 text-transform: uppercase;
 &:hover {
   background: ${props => props.color};
   color: white;
 }
 &:focus {
   outline: 0;
 }
`;

export default Button;