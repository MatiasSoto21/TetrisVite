import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  /* border-radius: 5px; */
  background: rgba(${props => props.css}, 0.8);
  border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${props => props.css}, 0.1);
  border-right-color: rgba(${props => props.css}, 1);
  border-top-color: rgba(${props => props.css}, 1);
  border-left-color: rgba(${props => props.css}, 0.3);
`;
