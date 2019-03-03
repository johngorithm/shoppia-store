import styled from 'styled-components';

export const Button = styled.button`
 border-radius: 3px;
 border: 1px solid transparent;
 color: goldenrod;
 background: white;
 outline: 0;
 cursor: pointer;
 padding: 5px 10px;
 &:hover {
   background: transparent;
   border-color: goldenrod;
 }
 &:focus {
   outline: 0;
 }
`